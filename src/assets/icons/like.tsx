import React from 'react';
import {motion} from "framer-motion";
import Defs from "./DEFS";


const LikeIcon = ({colors}: any) => {

    const heartVariants = {
        hover: {
            scale: 1.4,
            transition: {
                duration: 0.3,
                yoyo: Infinity
            }
        },
        click: {
            scale: 0.7,
            rotate: 360
        }
    };
    const heartVariants2 = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.2,
                yoyo: Infinity
            }
        },
        click: {
            scale: 0.7,
            rotate: 360
        }

    };

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 519 519"
            width="24"
            height="24"
            style={{cursor: "pointer", borderRadius: '50%'}}
        >
            <Defs/>
            <motion.g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"
                      variants={heartVariants2}
                      whileHover="hover"
            >
                <g transform="translate(-1565 -821)">
                    <g transform="translate(1565 821)">
                        <motion.circle
                            cx="259.5"
                            cy="259.5"
                            r="259.5"
                            fill={colors?.svg?.svg}
                            variants={heartVariants2}
                            whileHover="hover"
                            whileTap="click"
                        />
                        <motion.path
                            variants={heartVariants}
                            whileHover="hover"
                            whileTap="click"
                            fill={colors?.svg?.path}
                            d="M258 408a11.42 11.42 0 01-6.948-2.354c-59.053-37.548-98.357-70.342-117.914-98.38l-1.697-2.444-1.241-1.806C116.74 283.36 101 257.278 101 231.47 101 182.057 140.746 142 189.775 142c27.148 0 51.45 12.282 67.734 31.633l.49.588C274.285 154.531 298.804 142 326.226 142c49.03 0 88.775 40.057 88.775 89.469 0 26.34-16.397 52.966-30.029 72.755l-.412.598-1.697 2.443c-19.557 28.04-58.861 60.833-117.914 98.38A11.419 11.419 0 01258 408z"
                        />
                    </g>
                </g>
            </motion.g>
        </motion.svg>
    );
};

export default LikeIcon;