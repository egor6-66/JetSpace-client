import React from 'react';

const DownIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
             width="24"
             height="24"
             style={{cursor: "pointer", borderRadius: '50%'}}

        >
            <defs>
                <radialGradient
                    id="radialGradient-1"
                    cx="50%"
                    cy="21.931%"
                    r="87.888%"
                    fx="50%"
                    fy="21.931%"
                >
                    <stop offset="0%" stopColor="#F25674"/>
                    <stop offset="100%" stopColor="#D82D4E"/>
                </radialGradient>
            </defs>

            <path  fill="url(#radialGradient-1)"   d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm126.6 302.6L279.5 405.7c-8.8 8.9-18.6 10.3-23.5 10.3-4.881 0-14.65-1.391-22.65-9.398L129.4 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0s12.47 32.68-.03 45.18z"></path>
        </svg>
    )
}

export default DownIcon;