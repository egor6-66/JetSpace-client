import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {Typography} from "antd";
import './nav-menu.less';


interface NavMenuProps {
    myId: string | undefined,
    currentId: string | undefined,
}

const NavMenu:FC<NavMenuProps> = ({myId, currentId}) => {

    const {Title} = Typography;

    return (
        <div className='nav-menu'>
            <Title level={4}><Link to={`/user/${currentId}/profile`}>посты</Link></Title>
            <Title level={4}><Link to={`/user/${currentId}/profile/friends`}>друзья</Link></Title>
            <Title level={4}><Link to={`/user/${currentId}/profile/music`}>музыка</Link></Title>
            <Title level={4}><Link to={`/user/${currentId}/profile/reposts`}>репосты</Link></Title>
        </div>
    );
};

export default NavMenu;
