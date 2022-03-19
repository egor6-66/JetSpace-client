import React, {FC, useEffect, useState} from 'react';
import {useAudio} from "react-use";
import {UseTextColor} from "../../../assets/hooks";
import {PlayerIcons} from '../../../assets/icons';
import {Popover, Slider} from "antd";
import './voice-player.less';


interface VoicePlayerProps {
    url: string
    volume: number
}

const VoicePlayer: FC<VoicePlayerProps> = ({url, volume}) => {

    const [audio, state, controls] = useAudio({src: url,});

    useEffect(() => {
        controls.volume(volume)
    }, [volume])


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
