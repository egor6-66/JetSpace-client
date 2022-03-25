import {useEffect} from "react";

const voices = window.speechSynthesis.getVoices()


const UseSpeech = (text: any) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
};


export default UseSpeech;