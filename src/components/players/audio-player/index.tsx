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

    const {setPlaying} = useActions();
    const {playing, isVisibleSoundModal, volume} = useTypedSelector(state => state.player);
    const height = type === 'soundTracks' ? 130 : 400

    return (
        <div className='audio-player'>
            <div className='audio-player__header'/>
            <div className='audio-player__overlay'/>
            <div className='audio-player__hide-top-logo'/>
            <ReactPlayer
                width={'100%'}
                height={height}
                controls={false}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                onProgress={(value) => {}}
                previewTabIndex={2}
                volume={volume}
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
            </div>
        </div>
    );
};

export default AudioPlayer;