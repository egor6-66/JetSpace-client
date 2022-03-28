import React, {FC, useEffect, useRef, useState} from 'react';
import ReactPlayer from "react-player";
import {YouTubeIcon} from "../../../assets/icons";
import {UseColor} from "../../../assets/hooks";
import {motion} from "framer-motion";
import './video-player.less';


interface ReactPlayerCustomsProps {
    width: number | string,
    height: number | string,
    url: string | undefined,

}


export const ReactPlayerCustoms: FC<ReactPlayerCustomsProps> = ({width, height, url}) => {

    const colors = UseColor()
    const videoRef = useRef(null)
    const [isReady, setIsReady] = useState<boolean>(false)


    return (

        <div className="video-player">
            {!isReady &&
            <motion.div style={{backgroundColor: colors?.bc?.active}} className='video-player__loader'>
                <div className='audio-player__loader_icon'>
                    <YouTubeIcon/>
                </div>
            </motion.div>}
        <ReactPlayer
            ref={videoRef}
            style={{backgroundColor: 'red'}}
            width={width}
            height={height}
            onReady={() => setIsReady(true)}
            onBuffer={() => setIsReady(false)}
            pip={true}
            stopOnUnmount={false}
            url={url}
            config={{
                youtube: {
                    playerVars: {
                        pictureInPicture: true,
                        pip: true,
                        color: 'white',
                        controls: 2,
                        showinfo: 0,
                        modestbranding: 1,
                        loop: 1,
                        iv_load_policy: 3,
                        enablejsapi: 1,

                    },
                }
            }}
        />


        </div>
    );
};
