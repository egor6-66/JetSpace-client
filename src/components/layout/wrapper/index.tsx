import React, {FC, useRef} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {UseScroll, UseGetContainerWidth} from "../../../assets/hooks";
import navMenuList from "../../../pages/profile/left-panel/nav-menu/list";
import Header from "../header";
import {motion} from "framer-motion";
import './wrapper.less'



interface WrapperProps {
    myId: string | undefined,
}

const Wrapper: FC<WrapperProps> = ({myId}) => {

    const location = useLocation().pathname.split('/').pop();
    const {id: currentId} = useParams();
    const scrollRef = useRef(null);
    const scroll = UseScroll('wrapper', scrollRef)
    const width = UseGetContainerWidth(80, 1280, 900)


    return (
        <div className='wrapper' ref={scrollRef}>
            <div className='wrapper__header'>
                <div className='wrapper__header_container'
                     style={{width: width}}
                >
                    <Header myId={myId}/>
                </div>
            </div>
            <div className='wrapper__main'>
                <motion.div className='wrapper__main_container'
                     style={{width: width}}>
                    <Outlet/>
                </motion.div>
            </div>
        </div>
    );
};

export default Wrapper;
