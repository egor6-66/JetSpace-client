import React, {FC, useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {GET_MESSAGES} from "../../../../GRAPHQL/queries/message-queries";
import {ADD_MESSAGE, SET_MESSAGE_LOCATION, USER_TYPING} from "../../../../GRAPHQL/mutations/message-mutations";
import {USER_TYPING_SUB} from '../../../../GRAPHQL/subscriptions/message-subscriptions'
import {UseGetContainerHeight, UseGetContainerWidth} from "../../../../assets/hooks";
import messageSubscriptions from "./message-subscriptions";
import {useTypedSelector} from "../../../../store";
import MessagesModalFooter from "./messages-modal-footer";
import MessagesBody from "./messages-body";
import MessageModalHeader from "./message-modal-header";
import {Modal} from "antd";
import './messages-modal.less'
import Spinner2 from "../../../../components/spinners/spinner-2";
import Spinner1 from "../../../../components/spinners/spinner-1";


interface MessagesModalProps {
    myId: string | undefined,
    colors: any,
}

const MessagesModal: FC<MessagesModalProps> = ({myId, colors}) => {

    const navigate = useNavigate();
    const location = useLocation().pathname.split('/').pop();
    const {id: currentId, userId} = useParams();
    const messageRef: any = useRef(null);
    const width = UseGetContainerWidth(120, 1280, 900);
    const height = UseGetContainerHeight(360, 990, 600);

    const user = useTypedSelector(state => state.user);
    const [newMessage, setNewMessage] = useState<string>('');
    const [startTyping, setStartTyping] = useState<boolean>(false);

    const [addMessage] = useMutation(ADD_MESSAGE);
    const [userTyping] = useMutation(USER_TYPING);
    const [setMessageLocation] = useMutation(SET_MESSAGE_LOCATION);
    const {data: typingSub} = useSubscription(USER_TYPING_SUB, {variables: {myId: myId, userId: userId}});

    const {data, refetch, loading, error, subscribeToMore} = useQuery(GET_MESSAGES, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId, userId: userId}
    });

    const subTyping = () => {
        userTyping({variables: {myId: myId, userId: userId, userName: startTyping ? `${user.name}_${user.lastName}` : ''}}).then()
    };
    const submit = async () => {
        await addMessage({variables: {myId: myId, recipientId: currentId, userId: userId, type: 'text', content: newMessage,}});
        setNewMessage('')
    };

    useEffect(() => {
        setMessageLocation({variables: {myId: myId, location: location}})
        messageSubscriptions(subscribeToMore, refetch, userId, myId)
    }, []);
    useEffect(() => subTyping(), [startTyping]);
    useEffect(() => newMessage.length >= 1 ? setStartTyping(true) : setStartTyping(false), [newMessage]);
    useEffect(() => !loading && messageRef?.current?.scrollIntoView({block: "end"}), [data]);


    const onCancelModal = async () => {
        await setMessageLocation({variables: {myId: myId, location: null}})
        setStartTyping(false)
        subTyping()
        navigate(-1,)
    };

    return (
        <Modal className='messages-modal'
               visible={true}
               onCancel={onCancelModal}
               width={width}
               destroyOnClose={true}
               title={<MessageModalHeader data={data}/>}
               bodyStyle={{padding: '24px 24px 0 24px', overflowY: "scroll", height: height, position: "relative"}}
               footer={
                   <MessagesModalFooter
                       newMessage={newMessage}
                       setNewMessage={setNewMessage}
                       addMessage={addMessage}
                       myId={myId}
                       userId={userId}
                       submit={submit}
                   />}
        >
            {loading ?
                <Spinner2 size={230}/>
                :
                <MessagesBody
                    myId={myId}
                    data={data}
                    typingSub={typingSub}
                    messageRef={messageRef}
                />
            }
        </Modal>
    );
};

export default MessagesModal;