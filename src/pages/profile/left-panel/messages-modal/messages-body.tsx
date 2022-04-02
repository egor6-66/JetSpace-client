import React, {FC} from 'react';
import VoicePlayer from "../../../../components/players/voice-player/voice-player";
import UserTyping from "./user-typing";
import moment from "moment";
import {motion} from "framer-motion";
import {Typography} from "antd";


interface MessagesBodyProps {
    myId: string | undefined,
    data: any,
    typingSub: any,
    messageRef: any,
}

const MessagesBody: FC<MessagesBodyProps> = ({myId, data, typingSub, messageRef}) => {

    const {Title, Text} = Typography;

    const getDate = (date: any) => {
        if (date[1] == moment().locale('ru').format('llll').split(',')[1]) {
            return date[2]
        } else return date
    };


    return (
        <div ref={messageRef} className='modal-body'>
            {data && data?.getMessages?.messages?.map((message: any) =>
                <div key={message?.id} className={myId === message?.userId ? 'modal-body__my-message' : 'modal-body__message '}>
                    {message?.type === 'text' &&
                    <Title className='message-content' level={5}>
                        {message?.content}
                    </Title>}
                    {message?.type === 'voice' &&
                    <div className='message-content'>
                        <VoicePlayer url={message?.content}/>
                    </div>
                    }
                    <Text className='message-date'>{getDate(message?.date?.split(','))}</Text>
                </div>
            )}
            <motion.div className={`modal-body__typing `}>
                <UserTyping
                    userName={typingSub?.userTypingSub?.userName}
                />
            </motion.div>
        </div>
    );
};

export default MessagesBody;
