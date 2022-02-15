import React from 'react';
import {navBarList} from "./list";
import NavBarIcons from "../../assets/icon/nav-bar-icons";
import {useNavigate, NavLink} from 'react-router-dom';
import './nav-bar.less';


const NavBar = () => {



    return (
        <div className='nav-bar'>
            {navBarList.map(({id, text,path},index) =>
                <div key={index} className='nav-bar__item'>
                    <NavBarIcons id={id} size={30} color={'#ffffff'}/>
                    <NavLink to={path}>{text}</NavLink>
                </div>
            )}
        </div>
    );
};

export default NavBar;