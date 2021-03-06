import React, {FC} from 'react';
import {UseColor} from "../hooks";


interface SubscriptionsIconsProps{
    id: string
}

const SubscriptionsIcons:FC<SubscriptionsIconsProps> = ({id}) => {

    const colors = UseColor()

    switch (id){
        case 'follow' :
            return(
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    version="1.1"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                >
                    <g fill={colors?.svg?.svg}>
                        <path d="M16.601 18.578c.106 0 .21-.012.316-.016a12.869 12.869 0 01-.145-1.822c0-5.098 3-9.484 7.324-11.523C22.551 2.691 19.777 1 16.601 1a8.789 8.789 0 000 17.578z"></path>
                        <circle cx="29.476" cy="16.74" r="9.763"></circle>
                        <path d="M37.993 26.365a12.8 12.8 0 01-8.518 3.241c-3.256 0-6.22-1.219-8.487-3.212-5.913 3.227-9.953 9.7-9.953 17.165 0 1.176.105 2.323.297 3.44h36.37c.193-1.116.298-2.264.298-3.439 0-7.488-4.063-13.978-10.007-17.195zM19.162 24.205a12.782 12.782 0 01-1.542-2.881 11.528 11.528 0 01-8.661-2.844C3.637 21.385 0 27.213 0 33.934c0 1.058.095 2.092.267 3.098h9.062a19.718 19.718 0 019.833-12.827z"></path>
                    </g>
                </svg>
            )
        case 'unfollow' :
            return(
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    version="1.1"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                >
                    <g fill={colors?.svg?.svg}>
                        <circle cx="20.897" cy="10.092" r="10.092"></circle>
                        <path d="M25 38c0-6.415 4.651-11.732 10.763-12.794a19.385 19.385 0 00-6.06-5.164 13.243 13.243 0 01-17.58.031C6.01 23.409 1.834 30.102 1.834 37.818c0 1.215.109 2.401.307 3.557h23.317A12.998 12.998 0 0125 38z"></path>
                        <path d="M38 28c-5.522 0-10 4.478-10 10s4.478 10 10 10 10-4.478 10-10-4.478-10-10-10zm5.679 13.558l-2.121 2.121L38 40.121l-3.558 3.559-2.121-2.122L35.879 38l-3.558-3.558 2.121-2.121L38 35.879l3.558-3.558 2.121 2.122L40.121 38l3.558 3.558z"></path>
                    </g>
                </svg>
            )
        default:
            return null
    }
};

export default SubscriptionsIcons;