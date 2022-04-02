import React, {FC, useEffect} from 'react';
import {useAudio} from "react-use";
import {PlayerIcons} from '../../../assets/icons';
import {Slider} from "antd";
import {useTypedSelector} from "../../../store";
import './voice-player.less';


interface VoicePlayerProps {
    url: string
}

const VoicePlayer: FC<VoicePlayerProps> = ({url}) => {

    const [audio, state, controls] = useAudio({src: url,});
    const {voiceMessageVolume} = useTypedSelector(state => state.player);

    useEffect(() => {
        controls.volume(voiceMessageVolume / 100)
    }, [voiceMessageVolume])


    return (
        <div className='voice-player'>
            {audio}
            <div className='voice-player__icon' onClick={state.playing ? controls.pause : controls.play}>
                {<PlayerIcons id={state.playing ? 'pause' : 'play'}/>}
            </div>
            <Slider
                style={{width: 250}}
                min={0}
                max={100}
                onChange={(value) => controls.seek(value * state?.buffered[0]?.end / 100)}
                value={state?.buffered[0]?.end && state.time / state?.buffered[0]?.end * 100}
            />
        </div>
    );
};

export default VoicePlayer;
