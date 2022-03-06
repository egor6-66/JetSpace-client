import React, {FC, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Picker from 'emoji-picker-react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_MESSAGES} from "../../../GRAPHQL/queries/message-queries";
import {ADD_MESSAGE} from "../../../GRAPHQL/mutations/message-mutations";
import {getWidth, getHeight} from "../../../assets/functions/get-area";
import Smile from "../../../assets/icon/smile";
import {Modal, Input, Button, Typography} from "antd";
import './messages-modal.less'
import {getAvatar, getName} from "./helpers";
import {useTypedSelector} from "../../../assets/hooks/useTypedSelector";
import TextArea from "antd/es/input/TextArea";


interface MessagesModalProps {
    myId: string | undefined,
}

const MessagesModal: FC<MessagesModalProps> = ({myId}) => {

    const {Title, Text} = Typography;
    const navigate = useNavigate();
    const {id: currentId} = useParams();
    const message: any = useRef(null)

    const [isVisiblePicker, setIsVisiblePicker] = useState<boolean>(false)
    const [newMessage, setNewMessage] = useState<string>('')
    const {user} = useTypedSelector(state => state.auth);

    const onEmojiClick = (event: any, emojiObject: any) => {
        setNewMessage(newMessage + emojiObject.emoji)
    };

    const [addMessage] = useMutation(ADD_MESSAGE);

    const {data, loading, error, subscribeToMore} = useQuery(GET_MESSAGES, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId, userId: currentId}
    });

    useEffect(() => {
        setTimeout(() => message?.current?.scrollIntoView({block: "end"}), 200)
    }, [data])

    const submit = async () => {
        await addMessage({
            variables: {
                myId: myId,
                userId: currentId,
                content: newMessage,
            },
        });
        setNewMessage('')
    }


    return (
        <Modal className='messages-modal'
               visible={true}
               onCancel={() => navigate(-1,)}
               width={getWidth(400)}
               title="Basic Modal"
               bodyStyle={{
                   padding: '24px 24px 0 24px',
                   overflowY: "scroll",
                   height: getHeight(400),
               }}
               footer={
                   <div className='messages-modal__footer'>
                       <TextArea value={newMessage}
                                 onChange={(e) => setNewMessage(e.target.value)}
                                 onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && submit()}
                       />
                       <div onMouseEnter={() => setIsVisiblePicker(true)}><Smile/></div>
                       <Button onClick={submit}>отправить</Button>
                   </div>}
        >
            <div ref={message} className='modal-body'>
                {data && data?.getMessages?.messages.map((message: any) =>
                    <div key={message.id} className='modal-body__message'>
                        <img src={getAvatar({
                            myId,
                            userId: message.userId,
                            myAvatar: user.avatar,
                            userAvatar: data?.getMessages.userAvatar,
                        })} alt="dwd"/>
                        <div key={message.id} className='modal-body__message_content'>
                            <Title level={4}>
                                {getName({
                                    myId,
                                    userId: message.userId,
                                    myName: {name: user.name, lastName: user.lastName},
                                    userName: {name: data?.getMessages.userName, lastName: data?.getMessages.userLastName},
                                })}
                            </Title>
                            <Title level={5}> {message.content}</Title>
                        </div>
                        <Text className='modal-body__message_date'>{message.date}</Text>
                    </div>
                )}
            </div>
            {isVisiblePicker &&
            <div className='picker' onMouseLeave={() => setIsVisiblePicker(false)}>
                <Picker
                    onEmojiClick={onEmojiClick}
                    disableSkinTonePicker={true}
                    disableSearchBar={true}
                />
            </div>}
        </Modal>
    );
};

export default MessagesModal;