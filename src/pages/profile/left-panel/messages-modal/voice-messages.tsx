import React, {FC, useEffect, useState} from 'react';
import {ReactMic} from 'react-mic';
import $axios from "../../../../services/axios-customs";
import {API_URL} from "../../../../constants";


interface VoiceMessagesProps {
    isRecord: boolean,
    addMessage: any,
    sendVoice: boolean,
    myId: any,
    userId: any
}

const VoiceMessages: FC<VoiceMessagesProps> = ({isRecord, addMessage, sendVoice, myId, userId}) => {

    const [blob, setBlob] = useState<any>(null)

    useEffect(() => {
        if(sendVoice){
            const customRequest = async () => {
                const bodyFormData = new FormData();
                bodyFormData.append('userId', userId);
                bodyFormData.append('voice', blob);
                const response = await $axios.post(`${API_URL}/fileUpload`, bodyFormData)
                response.status === 200 &&
                await addMessage({
                    variables: {
                        myId: myId,
                        userId: userId,
                        type: 'voice',
                        content: response.data.path,
                    },
                });
            };
            customRequest()
        }

    },[sendVoice,isRecord])

    return (
        <ReactMic
            record={isRecord}
            className={isRecord ? "sound-wave" : 'sound-wave-hidden'}
            onStop={(recordedBlob) => setBlob(recordedBlob.blob)}
            strokeColor="#000000"
            backgroundColor="#FF4081"
        />
    );
};

export default VoiceMessages;