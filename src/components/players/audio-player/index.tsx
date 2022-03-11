import React, {FC, useState} from 'react';
import ReactPlayer from "react-player";
import './audio-player.less'


interface AudioPlayerProps {
    url: string | undefined,
}

const AudioPlayer: FC<AudioPlayerProps> = ({url}) => {

    const [play, setPlay] = useState<boolean>(false)

    return (
        <div className='audio-player'>
            <div className='audio-player__header'/>
            <div className='audio-player__overlay'/>
            <div className='audio-player__hide-top-logo'/>
            <ReactPlayer
                width={'100%'}
                height={500}
                controls={true}
                onPlay={() => setPlay(true)}
                onPause={() => setPlay(false)}
                playing={play}
                url={url}
                config={{
                    soundcloud: {
                        options: {
                            show_user: false,
                            show_comments:false,
                            hide_related:true,
                            visual: false,
                        }
                    }
                }}
            />
            <div className='audio-player__hide-bottom-logo'/>
            <div className='audio-player__footer'/>
        </div>
    );
};

export default AudioPlayer;