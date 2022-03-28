import React from 'react';
import {motion} from "framer-motion";
import {LogoProjectIcon} from '../../assets/icons'
import './project-info.less';


const ProjectInfo = () => {
    return (
        <motion.div className='project-info'
            initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}
        >
            <LogoProjectIcon size={150}/>
        </motion.div>
    );
};

export default ProjectInfo;