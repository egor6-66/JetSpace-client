import React, {FC, useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import {Slider} from "antd";
import './audio-player.less'
import {UseColor} from '../../../assets/hooks';
import {SoundCloudIcon} from '../../../assets/icons'
import {useActions} from "../../../store/actions";
import {useTypedSelector} from "../../../store";
import {motion, AnimatePresence} from "framer-motion";


interface AudioPlayerProps {
    url?: string | undefined,
    type?: string | undefined,
}

const AudioPlayer: FC<AudioPlayerProps> = ({url, type}) => {

    const colors = UseColor()
    const {setPlaying} = useActions();
    const {playing, isVisibleSoundModal, volume} = useTypedSelector(state => state.player);
    const height = type === 'soundTracks' ? 130 : 400
    const [isReady, setIsReady] = useState<boolean>(false)
    console.log(isReady)
    return (
        <AnimatePresence>
            <motion.div className='audio-player' style={{height: height}}
                        initial={{opacity: 0}} animate={{opacity: 1}}
            >
                {!isReady &&
                <motion.div style={{backgroundColor: colors?.bc?.active}} className='audio-player__loader'>
                    <div className='audio-player__loader_icon'>
                        <SoundCloudIcon/>
                    </div>
                </motion.div>}
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
                    // onProgress={(value) => }
                    onReady={() => setIsReady(true)}
                    onBuffer={() => setIsReady(false)}
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
            </motion.div>
        </AnimatePresence>
    );
};

export default AudioPlayer;