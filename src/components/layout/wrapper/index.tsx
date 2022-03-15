import React, {FC, useRef} from 'react';
import {Outlet} from "react-router-dom";
import {UseScroll, UseGetContainerWidth} from "../../../assets/hooks";
import Header from "../header";
import Footer from "../footer";
import './wrapper.less'


interface WrapperProps {
    myId: string | undefined,
}

const Wrapper: FC<WrapperProps> = ({myId}) => {

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
                <div className='wrapper__main_container'
                     style={{width: width}}
                >
                    <Outlet/>
                </div>
            </div>
            <div className='wrapper__footer'>
                <div className='wrapper__footer_container'
                    style={{width: width}}
                >
                    <Footer myId={myId}/>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
