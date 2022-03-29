import React, {FC, useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import {useMutation} from "@apollo/client";
import {ADD_SOUND, REMOVE_SOUND} from "../../../GRAPHQL/mutations/sound-mutations";
import {UseColor} from '../../../assets/hooks';
import {SoundCloudIcon, SaveIcon, PlayerIcons,DeleteIcon} from '../../../assets/icons'
import {useActions} from "../../../store/actions";
import {useTypedSelector} from "../../../store";
import {motion, AnimatePresence} from "framer-motion";
import {Popover} from "antd";
import './audio-player.less'


interface AudioPlayerProps {
    myId: string | undefined,
    currentId: string | undefined,
    url?: string | undefined,
    type?: string | undefined,
    soundId?: string | undefined,
}

const AudioPlayer: FC<AudioPlayerProps> = ({myId, currentId, url, type, soundId}) => {

    const colors = UseColor()
    const {setPlaying} = useActions();
    const {playing, isVisibleSoundModal, volume} = useTypedSelector(state => state.player);
    const height = type === 'soundTracks' ? 130 : 400
    const [isReady, setIsReady] = useState<boolean>(false)
    const [currentPlay, setCurrentPlay] = useState<boolean>(false)

    const [addSound] = useMutation(ADD_SOUND);
    const [removeSound] = useMutation(REMOVE_SOUND);

    const saveSound = async () => {
        await addSound({
            variables: {
                id: myId,
                path: url,
                type: type,
            },
        });
    };

    const deleteSound = async () => {
        await removeSound({
            variables: {
                id: myId,
                soundId: soundId,
                type: type,
            },
        });
    };

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
                <div className={type === 'soundTracks' ? 'audio-player__play-icon-soundsTracks' : 'audio-player__play-icon-playLists'}>
                    <PlayerIcons id={currentPlay ? 'pause' : 'play'}/>
                </div>
                <div className='audio-player__overlay'/>
                <div className='audio-player__hide-privacy'/>
                <div className='audio-player__disabled-linc'
                     style={{
                         marginLeft: type === 'soundTracks'? 0: 50,
                     }}
                />
                <div className='audio-player__overlay-avatar'
                style={{
                    width: type === 'soundTracks'? 100 : 150,
                    height: type === 'soundTracks'? 100 : 150
                }}
                />
                <div className='audio-player__icons'>
                    {myId === currentId ?
                        <Popover content={`удалить ${type === 'soundTracks'? 'трек' : 'плэйлист'}`} placement='left'>
                            <div onClick={deleteSound}><DeleteIcon/></div>
                        </Popover>
                        :
                        <Popover content={'добавить себе'} placement='left'>
                            <div onClick={saveSound}><SaveIcon/></div>
                        </Popover>
                    }
                </div>
                <ReactPlayer
                    width={'100%'}
                    height={height}
                    controls={false}
                    onPlay={() => {
                        setCurrentPlay(true)
                        setPlaying(true)
                    }}
                    onPause={() => {
                        setCurrentPlay(false)
                        setPlaying(false)
                    }}
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
            </motion.div>
        </AnimatePresence>
    );
};

export default AudioPlayer;