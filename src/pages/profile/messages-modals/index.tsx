import React, {FC, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {GET_MESSAGES} from "../../../GRAPHQL/queries/message-queries";
import {ADD_MESSAGE} from "../../../GRAPHQL/mutations/message-mutations";
import {UseGetContainerHeight, UseGetContainerWidth} from "../../../assets/hooks";
import {getAvatar, getName} from "./helpers";
import Smile from "../../../assets/icons/smile";
import {useTypedSelector} from "../../../store";
import messageSubscriptions from "./message-subscriptions";
import EmojiPicker from "../../../components/emoji-picker";
import {Modal, Dropdown, Button, Typography} from "antd";
import TextArea from "antd/es/input/TextArea";
import './messages-modal.less'


interface MessagesModalProps {
    myId: string | undefined,
}

const MessagesModal: FC<MessagesModalProps> = ({myId}) => {

    const {Title, Text} = Typography;
    const navigate = useNavigate();
    const {id: currentId, userId} = useParams();
    const message: any = useRef(null)
    const width = UseGetContainerWidth(120, 1280, 900)
    const height = UseGetContainerHeight(360, 990, 600)

    const [newMessage, setNewMessage] = useState<string>('')
    const user = useTypedSelector(state => state.user);

    const onEmojiClick = (event: any, emojiObject: any) => setNewMessage(newMessage + emojiObject.emoji)

    const [addMessage] = useMutation(ADD_MESSAGE);

    const {data, refetch, loading, error, subscribeToMore} = useQuery(GET_MESSAGES, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId, userId: userId}
    });

    useEffect(() => {
        setTimeout(() => message?.current?.scrollIntoView({block: "end"}), 200)
    }, [data])

    useEffect(() => {
        messageSubscriptions(subscribeToMore, refetch)
    }, [])

    const submit = async () => {
         await addMessage({
            variables: {
                myId: myId,
                userId: userId,
                content: newMessage,
            },
        });
        setNewMessage('')
    }


    return (
        <Modal className='messages-modal'
               visible={true}
               onCancel={() => navigate(-1,)}
               width={width}
               title="Basic Modal"
               bodyStyle={{
                   padding: '24px 24px 0 24px',
                   overflowY: "scroll",
                   height: height,
               }}
               footer={
                   <div className='messages-modal__footer'>
                       <TextArea value={newMessage}
                                 onChange={(e) => setNewMessage(e.target.value)}
                                 onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && submit()}
                       />
                       <Dropdown trigger={["hover"]}
                                 placement={"topLeft"}
                                 overlay={<EmojiPicker onEmojiClick={onEmojiClick}/>}>
                           <div className='messages-modal__footer_svg'>
                               <Smile/>
                           </div>
                       </Dropdown>
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
        </Modal>
    );
};

export default MessagesModal;