import React from 'react';
import {motion} from "framer-motion";
import SoundCloudIcon from "../../assets/icons/sound-cloud-icon";
import './project-info.less';


const ProjectInfo = () => {
    return (
        <motion.div className='project-info'
            initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}
        >
            <SoundCloudIcon/>
        </motion.div>
    );
};

export default ProjectInfo;