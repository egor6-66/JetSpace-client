import React from 'react';
import {motion} from "framer-motion";
import {UseSvgColor} from "../hooks";

const CloseIcon = () => {

    const color = UseSvgColor()

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            enableBackground="new 0 0 512 512"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            style={{cursor: "pointer", borderRadius: '50%'}}
        >
            <motion.circle
                cx="259.5"
                cy="259.5"
                r="259.5"
                fill="url(#radialGradient-1)"
            />
            <path fill={color.active} d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path>
        </svg>
    );
};

export default CloseIcon;