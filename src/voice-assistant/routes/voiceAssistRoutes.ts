import {useEffect, useState} from "react";
import {useTypedSelector} from "../../store";
import {useNavigate} from "react-router-dom";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import UseSpeech from "../../assets/hooks/useSpeech";
import {allRoutes} from './list';


const VoiceAssistRoutes = (isActivated: boolean) => {

    const navigate = useNavigate();
    const user = useTypedSelector(state => state.user);
    const currentUser = useTypedSelector(state => state.currentUser);
    const voiceAssist = useTypedSelector(state => state.voiceAssist);
    const [redirectUrl, setRedirectUrl] = useState<string>('')

    const commands = [
        {
            command: ["Go to *", `${voiceAssist.name} Открой *`],
            callback: (redirectPage: any) => setRedirectUrl(redirectPage)
        }
    ];

    const {transcript} = useSpeechRecognition({commands})

    useEffect(() => {
        const rout = allRoutes(user.id, currentUser.id).find(item => item.title === redirectUrl.toLowerCase())

        if (redirectUrl.toLowerCase() === rout?.title) {
            UseSpeech(voiceAssist.voiceResponse)
            navigate(rout.path)
        } else {
            UseSpeech('я тебя не поняла беззубый')
        }
    }, [redirectUrl])

    useEffect(() => {
        isActivated ? start() : stop()
    }, [isActivated])

    const start = () => SpeechRecognition.startListening({language: 'ru', continuous: true,})
    const stop = () => SpeechRecognition.stopListening()

    return null
}

export default VoiceAssistRoutes;
