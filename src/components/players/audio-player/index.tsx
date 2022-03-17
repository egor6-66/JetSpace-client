import React, {FC, useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import {Slider} from "antd";
import './audio-player.less'
import {useActions} from "../../../store/actions";
import {useTypedSelector} from "../../../store";


interface AudioPlayerProps {
    url?: string | undefined,
    type?: string | undefined,
}

const AudioPlayer: FC<AudioPlayerProps> = ({url, type}) => {

    const audioPlayerRef: any = useRef()
    const [v, setv] = useState<number>(0.2)
    const {setPlaying} = useActions();

    const {playing} = useTypedSelector(state => state.player);
    const [play, setPlay] = useState<boolean>(false)
    const height = type === 'soundTracks' ? 130 : 400

    useEffect(() => {
        setPlaying(play)
        console.log(audioPlayerRef)
    }, [audioPlayerRef])

    return (
        <div className='audio-player'>
            <div className='audio-player__header'/>
            <div className='audio-player__overlay'/>
            <div className='audio-player__hide-top-logo'/>
            <ReactPlayer
                ref={audioPlayerRef}
                width={'100%'}
                height={height}
                controls={false}
                onPlay={() => setPlay(true)}
                onPause={() => setPlay(false)}
                // playing={true}
                volume={v}
                url={url}
                config={{
                    soundcloud: {
                        options: {
                            show_user: true,
                            show_comments: false,
                            hide_related: true,
                            visual: false,
                        }
                    }
                }}
            />
            <div className='audio-player__hide-bottom-logo'/>
            <div style={{height: type === 'soundTracks' ? 32 : 74}} className='audio-player__footer'>
                <div className='audio-player__footer_slider'>
                    <Slider
                        trackStyle={{backgroundColor: '#f50'}}
                        handleStyle={{backgroundColor: 'rgb(204, 68, 0)'}}
                        min={0}
                        max={1}
                        tooltipVisible={false}
                        onChange={(vol) => setv(vol)}
                        value={v}
                        step={0.01}
                    />
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;