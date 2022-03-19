import React, {FC, useEffect, useRef} from 'react';
import ReactPlayer from "react-player";

import {Button} from "antd";
import './react-player-customs.less';



interface ReactPlayerCustomsProps {
    width: number | string,
    height: number | string,
    url: string | undefined,

}


export const ReactPlayerCustoms: FC<ReactPlayerCustomsProps> = ({width, height, url}) => {

    const config = {
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
        },
    }
    const videoRef = useRef(null)


    return (

        <div className="App">
            {/*<video ref={videoRef} autoPlay muted controls loop width="100%">*/}
            {/*    <source src="https://youtu.be/50S4tQuxq3M" />*/}
            {/*</video>*/}

            <iframe  ref={videoRef} width={width} height={height} src="https://www.youtube.com/embed/8igoqDZlm6g" title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        {/*<ReactPlayer*/}
        {/*    ref={videoRef}*/}
        {/*    style={{backgroundColor: 'red'}}*/}
        {/*    width={width}*/}
        {/*    height={height}*/}
        {/*    // controls={true}*/}
        {/*    pip={true}*/}
        {/*    stopOnUnmount={false}*/}
        {/*    // url={url}*/}
        {/*    url={'https://youtu.be/50S4tQuxq3M'}*/}
        {/*    config={config}*/}
        {/*/>*/}


        </div>
    );
};
