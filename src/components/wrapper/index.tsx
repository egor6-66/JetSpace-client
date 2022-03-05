import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../header";
import NavBar from "../nav-bar";
import Footer from "../footer";
import './wrapper.less'


interface WrapperProps {
    myId: string,
}

const Wrapper: FC<WrapperProps> = ({myId}) => {
    return (
        <div className='wrapper'>
            <div className='wrapper__header'>
                <div className='wrapper__header_container'>
                    <Header
                        myId={myId}
                    />
                </div>
            </div>
            <div className='wrapper__main'>
                <div className='wrapper__main_container'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
