import React from 'react';

const AvatarIcon = ({colors}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            width={24}
            height={24}
            style={{cursor: "pointer", borderRadius: '50%'}}
        >
            <g
                fill={colors?.svg?.path}
                stroke={colors?.svg?.svg}
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
            >
                <circle cx="16" cy="16" r="15"></circle>
                <path d="M26 27h0c0-5.523-4.477-10-10-10h0c-5.523 0-10 4.477-10 10v0"></path>
                <circle cx="16" cy="11" r="6"></circle>
            </g>
        </svg>
    );
};

export default AvatarIcon;