import React from 'react';
import {motion} from "framer-motion";
import {UseSvgColor} from "../hooks";

const SayIcon = () => {

    const color = UseSvgColor()

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                style={{cursor: "pointer", borderRadius: '50%', position: "absolute", zIndex: 2}}
                viewBox="0 0 48 48"
            >
                <circle cx="18" cy="18" r="8"/>
                <path fill={color.active}
                      d="M18 30c-5.34 0-16 2.68-16 8v4h32v-4c0-5.32-10.66-8-16-8zm15.52-19.27l-3.37 3.38c1.68 2.37 1.68 5.41 0 7.78l3.37 3.38c4.04-4.06 4.04-10.15 0-14.54zM40.15 4l-3.26 3.26c5.54 6.05 5.54 15.11-.01 21.47L40.15 32c7.8-7.77 7.8-19.91 0-28z"></path>
                <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                style={{cursor: "pointer", borderRadius: '50%', position: "relative"}}
            >
                <motion.circle
                    cx="259.5"
                    cy="259.5"
                    r="259.5"
                    fill="url(#radialGradient-1)"
                />
            </svg>
        </>
    );
};

export default SayIcon;