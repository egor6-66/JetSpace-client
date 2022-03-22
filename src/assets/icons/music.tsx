import React from 'react';
import {motion} from "framer-motion";
import {useTypedSelector} from "../../store";

const MusicIcon = () => {

    const {playing, isVisibleSoundModal} = useTypedSelector(state => state.player);

    const svgVariants = {
        hidden: {},
        visible: {
            scale: [1, 1.1, 1, 1.2,  0.9,],
            transition: {
                duration: 2,
                yoyo: Infinity,
                ease: "easeInOut",
            }
        }
    }
    const pathVariant = {
        hidden: {
            color: '#d4380d',
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition:{
                duration: 3,
                yoyo: Infinity,
                ease: "easeInOut",
            }
        }
    }

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            version="1.1"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
            fill="#9BA3B1"
            variants={playing ? svgVariants : {}}
            initial='hidden'
            animate='visible'
        >
            <path fill="none" d="M0 0H50V50H0z"/>
            <motion.path
                d="M43 3v35.004S42.875 44 36.016 44C28.506 44 28 39.127 28 38c0-2.41.942-5.037 8-5.037 3.249 0 4-.835 4-2.963V13.22c0-1.317-.08-1.793-1.543-1.462-2.517.569-18.957 4.133-19.613 4.29S18 16.594 18 17.75V43c0 2.253-1.742 6-8 6s-7-3.998-7-6c0-2.973 2.25-4.891 7.007-4.891C14.438 38.109 15 36.86 15 35V8c0-.96.391-1.609 1.366-1.824 1.631-.358 24.78-5.131 24.78-5.131S43 .622 43 3z"
                variants={pathVariant}
            />

        </motion.svg>
    );
};

export default MusicIcon;