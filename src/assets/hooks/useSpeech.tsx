import {useSpeech} from "react-use";
import {useEffect} from "react";


const UseSpeech = ({text}: any) => {

    const voices = window.speechSynthesis.getVoices()

    useSpeech('y', {
        rate: 0.8,
        pitch: 0.5,
        voice: voices[0],
    })
    return (
        <div>rrr</div>
    )
};


export default UseSpeech;