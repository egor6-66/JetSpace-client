import React, {FC, useEffect, useRef, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {GET_MESSAGES} from "../../../GRAPHQL/queries/message-queries";
import {ADD_MESSAGE} from "../../../GRAPHQL/mutations/message-mutations";
import {UseGetContainerHeight, UseGetContainerWidth} from "../../../assets/hooks";
import {SmileIcon, MicrophoneIcon, PlayerIcons} from '../../../assets/icons'
import messageSubscriptions from "./message-subscriptions";
import EmojiPicker from "../../../components/emoji-picker";
import VoiceMessages from "./voice-messages";
import VoicePlayer from "../../../components/players/voice-player/voice-player";
import moment from "moment";
import {Modal, Popover, Button, Typography, Avatar, Slider} from "antd";
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
    const [isRecord, setIsRecord] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(1)

    const onEmojiClick = (event: any, emojiObject: any) => setNewMessage(newMessage + emojiObject.emoji)

    const [addMessage] = useMutation(ADD_MESSAGE);

    const {data, refetch, loading, error, subscribeToMore} = useQuery(GET_MESSAGES, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId, userId: userId}
    });

    useEffect(() => {
        setTimeout(() => message?.current?.scrollIntoView({block: "end"}), 50)
    }, [data]);

    useEffect(() => {
        messageSubscriptions(subscribeToMore, refetch)
    }, []);

    const getDate = (date: any) => {
        if (date[1] == moment().locale('ru').format('llll').split(',')[1]) {
            return date[2]
        } else return date
    };

    const submit = async () => {
        await addMessage({
            variables: {
                myId: myId,
                userId: userId,
                type: 'text',
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
               title={
                   <div className='messages-modal__footer'>
                       <Avatar size={60} src={data?.getMessages?.userAvatar}/>
                       <Title>{data?.getMessages?.userName} {data?.getMessages?.userLastName}</Title>
                   </div>
               }
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
                       <VoiceMessages
                           isRecord={isRecord}
                           addMessage={addMessage}
                           myId={myId}
                           userId={userId}
                       />
                       <div className='messages-modal__footer_svg'>
                           <div style={{display: "flex", alignItems: "center"}} onClick={() => setIsRecord(!isRecord)}>
                               <MicrophoneIcon/>
                           </div>
                           <Popover content={
                               <Slider vertical step={0.1} style={{height: 50}} min={0} max={1}
                                       onChange={(value) => setVolume(value)}
                                       value={volume}/>
                           }>
                               <div className='voice-player__icon'>
                                   {<PlayerIcons id={'volume'}/>}
                               </div>
                           </Popover>
                           {!isRecord &&
                           <Popover placement={"topRight"} content={<EmojiPicker onEmojiClick={onEmojiClick}/>}>
                               <div style={{display: "flex", alignItems: "center"}}><SmileIcon/></div>
                           </Popover>}
                       </div>
                       <Button onClick={submit}>отправить</Button>
                   </div>}
        >
            <div ref={message} className='modal-body'>
                {data && data?.getMessages?.messages.map((message: any) =>
                    <div key={message.id} className={myId === message.userId ? 'modal-body__my-message' : 'modal-body__message '}>
                        {message.type === 'text' &&
                        <Title className='message-content' level={5}>
                            {message.content}
                        </Title>}
                        {message.type === 'voice' &&
                        <div className='message-content'>
                            <VoicePlayer volume={volume} url={message.content}/>
                        </div>
                        }
                        <Text className='message-date'>{getDate(message.date.split(','))}</Text>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default MessagesModal;