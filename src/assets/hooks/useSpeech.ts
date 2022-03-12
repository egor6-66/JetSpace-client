import { useSpeech } from "react-use";


const UseSpeech = (text: string) => {
    useSpeech(text, {
        volume: 80,
    });
    return null;
};

export default UseSpeech;