import React from 'react';
import {UseColor} from "../hooks";
import Defs from "./DEFS";
import {motion} from "framer-motion";

const SaveIcon = () => {

    const colors = UseColor()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill={colors?.svg?.svg}
            width="34"
            height="34"
            style={{zIndex: 10000, cursor: "pointer"}}
        >
            <Defs/>
            <g>
                <path fill={colors?.svg?.svg} d="M18 9c0-3.3-2.7-6-6-6S6 5.7 6 9c-3.4 0-6.1 2.8-6 6.2.1 3.3 3 5.8 6.3 5.8H9c.6 0 1-.4 1-1v-3H8.8c-.9 0-1.3-1.1-.7-1.7l3.2-3.2c.4-.4 1-.4 1.4 0l3.2 3.2c.6.6.2 1.7-.7 1.7H14v3c0 .6.4 1 1 1h2.7c3.3 0 6.2-2.5 6.2-5.8.2-3.4-2.5-6.2-5.9-6.2z"></path>
            </g>
        </svg>
    );
};

export default SaveIcon;