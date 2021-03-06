import React from 'react';
import {motion} from "framer-motion";

const SendCommentIcon = () => {
    return (
<>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        style={{cursor: "pointer", borderRadius: '50%',position: "absolute", marginLeft: 2}}
        fill="none"
        viewBox="0 0 20 20"
    >
        <path
            fill="#FFF"
            d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5z"
        ></path>
        <path
            fill="#FFF"
            d="M17 12.276V10.4a5.507 5.507 0 001-.657v2.533c0 1.418-1.164 2.566-2.6 2.566h-4.59l-4.011 2.961a1.009 1.009 0 01-1.4-.199.978.978 0 01-.199-.59v-2.172h-.6c-1.436 0-2.6-1.149-2.6-2.566v-6.71C2 4.149 3.164 3 4.6 3h5a5.463 5.463 0 00-.393 1H4.6C3.704 4 3 4.713 3 5.566v6.71c0 .853.704 1.566 1.6 1.566h1.6V17h.003l.002-.001 4.276-3.157H15.4c.896 0 1.6-.713 1.6-1.566z"
        ></path>
    </svg>
</>
    );
};

export default SendCommentIcon;
