import React, {FC} from 'react';
import {ReactMic} from 'react-mic';
import $axios from "../../../services/axios-customs";
import {API_URL} from "../../../constants";


interface VoiceMessagesProps {
    isRecord: boolean,
    addMessage: any,
    myId: any,
    userId: any
}

const VoiceMessages: FC<VoiceMessagesProps> = ({isRecord, addMessage, myId, userId}) => {

    const customRequest = async ({blob}: any) => {
        blob.name = userId
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

    return (
        <ReactMic
            record={isRecord}
            className={isRecord ? "sound-wave" : 'sound-wave-hidden'}
            onStop={(recordedBlob) => customRequest(recordedBlob)}
            strokeColor="#000000"
            backgroundColor="#FF4081"
        />
    );
};

export default VoiceMessages;