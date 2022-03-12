import React, {FC} from 'react';
import ReactPlayer from "react-player";

import {Button} from "antd";
import './react-player-customs.less';
import MenuIcon from "../../assets/icons/menu-icon";


interface ReactPlayerCustomsProps {
    width: number | string,
    height: number | string,
    url: string | undefined,

}

export const ReactPlayerCustoms: FC<ReactPlayerCustomsProps> = ({width, height, url}) => {
    const config = {
        youtube: {
            playerVars: {
                showinfo: 0,
                modestbranding: 1,
                loop: 1,
                iv_load_policy: 3,
                enablejsapi: 1,

            },
        },
    }
    return (
        <ReactPlayer
            style={{backgroundColor: 'red'}}
            width={width}
            height={height}
            // controls={true}
            pip={true}
            url={url}
            config={config}
        />
    );
};
