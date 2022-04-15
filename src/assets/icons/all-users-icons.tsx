import React, {FC} from 'react';
import {IColors} from "../../models/colors-model";
import {motion} from "framer-motion";


interface AllUsersIconsProps {
    id: string
    colors: IColors | null
}

const AllUsersIcons: FC<AllUsersIconsProps> = ({id, colors}) => {

    switch (id) {
        case 'follow' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    version="1.1"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                    style={{cursor: "pointer"}}
                >
                    <g fill={colors?.svg?.svg}>
                        <path
                            d="M16.601 18.578c.106 0 .21-.012.316-.016a12.869 12.869 0 01-.145-1.822c0-5.098 3-9.484 7.324-11.523C22.551 2.691 19.777 1 16.601 1a8.789 8.789 0 000 17.578z"></path>
                        <circle cx="29.476" cy="16.74" r="9.763"></circle>
                        <path
                            d="M37.993 26.365a12.8 12.8 0 01-8.518 3.241c-3.256 0-6.22-1.219-8.487-3.212-5.913 3.227-9.953 9.7-9.953 17.165 0 1.176.105 2.323.297 3.44h36.37c.193-1.116.298-2.264.298-3.439 0-7.488-4.063-13.978-10.007-17.195zM19.162 24.205a12.782 12.782 0 01-1.542-2.881 11.528 11.528 0 01-8.661-2.844C3.637 21.385 0 27.213 0 33.934c0 1.058.095 2.092.267 3.098h9.062a19.718 19.718 0 019.833-12.827z"></path>
                    </g>
                </svg>
            )
        case 'go-page' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill={colors?.svg?.svg}
                    style={{cursor: "pointer"}}
                    version="1.1"
                    viewBox="0 0 48 48"
                    xmlSpace="preserve"
                >
                    <path
                        fillRule="evenodd"
                        d="M44.715 23.711a.975.975 0 01-1.381 0l-8.939-8.938a1.019 1.019 0 01-.17-.171l-3.83-3.829a1.019 1.019 0 01-.17-.171L24 4.377 4.667 23.711a.975.975 0 11-1.381-1.381L23.191 2.425c.031-.047.053-.101.094-.144A.975.975 0 0124 2a.97.97 0 01.715.281c.043.042.062.096.096.144L30 7.616V4.997a1 1 0 011-1h4c.277 0 .527.112.707.293a.993.993 0 01.293.707v8.619l8.715 8.714c.381.381.381 1 0 1.381zM34 5.997h-2v3.619l2 2V5.997zm-24 16a1 1 0 011 1v19a2 2 0 002 2h6v-13a1 1 0 011-1h8a1 1 0 011 1v13h6a2 2 0 002-2v-19a1 1 0 112 0v19a4 4 0 01-4 4H13a4 4 0 01-4-4v-19a1 1 0 011-1zm17 21.999v-12h-6v12h6z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            )
        case 'message' :
            return (
                <svg
                    width="38"
                    height="38"
                    fill={colors?.svg?.svg}
                    style={{cursor: "pointer",  transform: 'scale(1, 1.25)'}}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path
                        d="M45 7H3a3 3 0 00-3 3v28a3 3 0 003 3h42a3 3 0 003-3V10a3 3 0 00-3-3zm-.64 2L24 24.74 3.64 9zM2 37.59V10.26l15.41 11.91zM3.41 39L19 23.41l4.38 3.39a1 1 0 001.22 0l4.4-3.39L44.59 39zM46 37.59L30.59 22.17 46 10.26z"
                        data-name="8-Email"
                    ></path>
                </svg>
            )
        case 'phone' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill={colors?.svg?.svg}
                    style={{cursor: "pointer", marginLeft: 4}}
                    version="1.1"
                    viewBox="0 0 50 50"
                    xmlSpace="preserve"
                >
                    <path fill="none" d="M0 0H50V50H0z"></path>
                    <path
                        fill="none"
                        stroke={colors?.svg?.svg}
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M30.217 35.252s4.049-2.318 5.109-2.875c1.057-.559 2.152-.7 2.817-.294 1.007.616 9.463 6.241 10.175 6.739.712.499 1.055 1.924.076 3.32-.975 1.396-5.473 6.916-7.379 6.857-1.909-.062-9.846-.236-24.813-15.207C1.238 18.826 1.061 10.887 1 8.978.939 7.07 6.459 2.571 7.855 1.595c1.398-.975 2.825-.608 3.321.078.564.781 6.124 9.21 6.736 10.176.419.66.265 1.761-.294 2.819-.556 1.06-2.874 5.109-2.874 5.109s1.634 2.787 7.16 8.312c5.527 5.526 8.313 7.163 8.313 7.163z"
                    ></path>
                </svg>
            )
        case 'video' :
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill={colors?.svg?.svg}
                    style={{cursor: "pointer",  transform: 'scale(1, 1.5)', marginLeft: 4}}
                    version="1.1"
                    viewBox="0 0 50 50"
                    xmlSpace="preserve"
                >
                    <path fill="none" d="M0 0H50V50H0z"></path>
                    <path
                        fill="none"
                        stroke={colors?.svg?.svg}
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M49 14L36 21 36 29 49 36z"
                    ></path>
                    <path
                        fill="none"
                        stroke={colors?.svg?.svg}
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M36 36a4 4 0 01-4 4H5a4 4 0 01-4-4V14a4 4 0 014-4h27a4 4 0 014 4v22z"
                    ></path>
                </svg>
            )
        default:
            return null
    }
};

export default AllUsersIcons;