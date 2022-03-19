import React from 'react';
import {motion} from "framer-motion";
import {UseTextColor} from "../../assets/hooks";


const ActiveLineMenu = () => {

    const colors = UseTextColor()

    return (
        <motion.div
            layoutId='activeItem'
            style={{
                width: '100%',
                height: '4px',
                position: 'absolute',
                bottom: '-2px',
                borderRadius: '8px',
                backgroundColor: colors.active
            }}
        />

    );
};

export default ActiveLineMenu;