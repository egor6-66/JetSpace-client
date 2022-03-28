import React from 'react';
import {motion} from "framer-motion";
import {UseColor, UseSvgColor} from "../hooks";


const DislikeIcon = () => {

    const colors = UseColor()

    const heartVariants = {
        hover: {
            y: -55,
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
            rotate: 15,
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 519 519"
            width="24"
            height="24"
            style={{cursor: "pointer", borderRadius: '50%',transform: 'rotate(180deg)'}}
            fill={colors?.svg?.svg}
        >

            <motion.g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"
                      variants={heartVariants2}
                      whileHover="hover"
            >

                <g transform="translate(-718 -153)">
                    <g transform="translate(718 153)">
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
                            fill={colors?.svg?.path}
                            variants={heartVariants}
                            whileHover="hover"
                            whileTap="click"
                            d="M237.087 138.806a3.728 3.728 0 00-2.116 3.452c.515 21.291.772 33.632.772
                            37.023v9.592l-1.605 3.358c-1.802 3.77-2.733 5.334-15.935 26.782-5.17 8.4-12.004
                             19.91-15.185 25.58a45.046 45.046 0 00-5.763 22.127l.188 103.51c.023 12.687 10.314
                            22.959 23 22.959h113.2l4.126-2.025c9.266-4.549 16.07-15.13 16.12-25.074.018-3.834-.104-4.33-2.05-8.342-1.138-2.346-2.01-4.3-1.937-4.344.073-.043 2.209-.993 4.747-2.111 10.904-4.804 17.32-12.44 17.785-21.164.246-4.606-.833-7.789-4.475-13.21-1.468-2.186-2.67-4.103-2.67-4.26 0-.157.356-.285.79-.285.435 0 2.56-.917 4.722-2.037 9.877-5.117 15.532-14.83 13.93-23.925-1.069-6.06-4.261-10.877-11.353-17.134l-2.324-2.05 2.67-2.856c3.445-3.685 5.535-6.717 6.907-10.02.902-2.171 1.103-3.562 1.112-7.704.018-7.9-1.808-13.195-6.13-17.771-2.895-3.065-6.125-5.06-10.69-6.602l-3.75-1.268c-51.495-.284-77.242-.49-77.24-.615.001-.19.436-3.905.965-8.257 1.212-9.967 1.344-28.157.252-34.772-3.11-18.84-13.128-33.595-26.31-38.752-3.302-1.291-4.387-1.473-9.537-1.591-3.196-.074-6.763.063-7.927.305-1.163.241-3.094.908-4.29 1.481zM130 250.377h43.858a7 7 0 017 7V396a7 7 0 01-7 7H130a7 7 0 01-7-7V257.377a7 7 0 017-7z"
                        />
                    </g>
                </g>
            </motion.g>
        </svg>
    );
};

export default DislikeIcon;