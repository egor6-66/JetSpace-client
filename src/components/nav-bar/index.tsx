import React from 'react';
import { Link } from 'react-router-dom';
import NavBarIcons from "../../assets/icon/nav-bar-icons";
import { useTypedSelector } from "../../assets/hooks/useTypedSelector";
import { navBarList } from "./list";
import './nav-bar.less';


const NavBar = () => {


    const {user} = useTypedSelector(state => state.auth);

    return (
        <div className='nav-bar'>
            {navBarList.map(({id, text,path}) =>
                <div key={id} className='nav-bar__item'>
                    <NavBarIcons id={id} size={30} color={'#ffffff'}/>
                    <Link to={`/user/${user.id}/${path}`}>{text}</Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
