import React, {FC} from 'react';
import {Link, useParams} from "react-router-dom";
import {Typography} from "antd";
import './nav-menu.less';
import {useActions} from "../../../store/actions";


interface NavMenuProps {
    myId: string | undefined,
    currentId: string | undefined,
}

const NavMenu: FC<NavMenuProps> = ({myId, currentId}) => {

    const {Title} = Typography;
    const {setIsVisibleSoundModal} = useActions();

    return (
        <div className='nav-menu'>
            <Title level={4}><Link to={`/user/${currentId}/profile`}>посты</Link></Title>
            {myId === currentId ? <Title level={4}><Link to={`/user/${myId}/profile/messages`}>диалоги</Link></Title>
                :
                <Title level={4}><Link to={`/user/${currentId}/profile/message/${currentId}`}>написать</Link></Title>
            }
            <Title level={4}><Link to={`/user/${currentId}/profile/friends`}>друзья</Link></Title>
            <Title level={4}><Link onClick={() => setIsVisibleSoundModal(true)} to={''}>музыка</Link></Title>
            <Title level={4}><Link to={`/user/${currentId}/profile/videos`}>видео</Link></Title>
            <Title level={4}><Link to={`/user/${currentId}/profile/reposts`}>репосты</Link></Title>
        </div>
    );
};

export default NavMenu;
