import React from 'react';
import {UseColor} from "../hooks";
import Defs from "./DEFS";

const SmileIcon = () => {

    const colors = UseColor()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 80 80"
            version="1.1"
            viewBox="0 0 80 80"
            xmlSpace="preserve"
            width="26"
            height="26"
            fill={colors?.svg?.svg}
            style={{cursor: "pointer"}}
        >
            <g>

                <g>
                    <Defs/>
                    <path   fill={colors?.svg?.svg} d="M40 5.4C20.9 5.4 5.4 20.9 5.4 40s15.5 34.6 34.5 34.6S74.5 59.1 74.6 40C74.5 20.9 59.1 5.5 40 5.4zm0 66.2C22.6 71.6 8.4 57.4 8.4 40 8.4 22.6 22.6 8.4 40 8.4c17.4 0 31.6 14.1 31.6 31.5-.1 17.5-14.2 31.6-31.6 31.7z"></path>
                    <path   fill={colors?.svg?.svg} d="M50.7 33.4c2.8 0 5.1-2.3 5.1-5.2s-2.3-5.1-5.2-5.1c-2.8 0-5.1 2.3-5.1 5.2s2.3 5.1 5.2 5.1zm0-7.2c1.2 0 2.1 1 2.1 2.2s-1 2.1-2.2 2.1c-1.2 0-2.1-1-2.1-2.2 0-1.2 1-2.1 2.2-2.1zM29.8 33.4c2.8 0 5.2-2.3 5.2-5.1s-2.3-5.1-5.1-5.2c-2.8 0-5.2 2.3-5.2 5.1-.1 2.9 2.2 5.2 5.1 5.2zm0-7.2c1.2 0 2.2 1 2.2 2.1s-1 2.2-2.2 2.2-2.1-1-2.1-2.2c-.1-1.2.9-2.1 2.1-2.1zM40 56.5c-7.6 0-12.3-5.1-14.6-7.6l-2.2 2c2.4 2.6 8 8.5 16.8 8.5 8 0 13.6-5.5 16.3-8.1l-2.1-2.1c-2.6 2.6-7.4 7.3-14.2 7.3z"></path>
                </g>
            </g>
        </svg>
    );
};

export default SmileIcon;