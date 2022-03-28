import React from 'react';
import useSvgColor from "../hooks/useSvgColor";
import {motion} from "framer-motion";

const MessageIcon = () => {

    const color = useSvgColor()

    const circleVariants = {
        hidden: {},
        visible: {

            transition: {
                duration: 1
            }
        }
    };
    const pathVariants = {
        hidden: {
            rotate: -90,
            scale: 0.3
        },
        visible: {
            rotate: 420,
            scale: 1.4,
            transition: {
                duration: 1,
                ease: 'easeInOut',
                yoyo: Infinity
            }
        }
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g>
                    <path
                        fill="url(#radialGradient-1)"
                        d="M30 60c16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0 13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30z"
                   />
                    <motion.path
                        fill={color.active}
                        variants={pathVariants}
                        initial='hidden'
                        animate='visible'
                        d="M30 33.462l17.308-15H12.692l17.308 15zm-4.675-1.66L30 35.637l4.602-3.837 12.706 10.891H12.692l12.633-10.89zm-13.787 9.736V19.615l12.693 10.962-12.693 10.961zm36.924 0V19.615L35.769 30.577l12.693 10.961z"
                    />
                </g>
            </g>
        </svg>
    );
};
// fill={color.active}
export default MessageIcon;