import React from 'react';


const DeleteIcon = ({colors}:any) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            fill={colors?.svg?.svg}
            width="34"
            height="34"
            style={{zIndex: 10000, cursor: "pointer"}}
        >

            <path fill={colors?.svg?.svg}
                  d="M24.972 12.288C24.608 7.657 20.723 4 16 4a8.937 8.937 0 00-8.627 6.451A8.003 8.003 0 002 18c0 4.411 3.589 8 8 8h13c3.86 0 7-3.14 7-7a6.97 6.97 0 00-5.028-6.712zm-5.265 7.005a.999.999 0 11-1.414 1.414L16 18.414l-2.293 2.293a.999.999 0 11-1.414-1.414L14.586 17l-2.293-2.293a.999.999 0 111.414-1.414L16 15.586l2.293-2.293a.999.999 0 111.414 1.414L17.414 17l2.293 2.293z"></path>
        </svg>
    );
};

export default DeleteIcon;