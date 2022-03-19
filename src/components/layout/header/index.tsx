import React, {FC, useEffect} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_NOTIFICATIONS} from "../../../GRAPHQL/queries/notification-queries";
import notificationsSubscriptions from "./notifications-subscriptions";
import {SettingsIcon, BellIcon, LogoIcon} from '../../../assets/icons'
import ProjectMenu from "../../project-menu";
import {Badge, Typography, Input, Popover} from "antd";
import './header.less';
import projectMenuList from "../../project-menu/list";


interface HeaderProps {
    myId: string | undefined,
}

const Header: FC<HeaderProps> = ({myId}) => {

    const {Title} = Typography;
    const {Search} = Input;

    const location = useLocation().pathname.split('/').pop();
    const {id: currentId} = useParams();

    const {data, loading, subscribeToMore} = useQuery(GET_NOTIFICATIONS, {
        fetchPolicy: `${myId === currentId ? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId}
    });

    useEffect(() => {
        notificationsSubscriptions(subscribeToMore, myId)

    }, [])

    const onSearch = (payload: String) => {
        console.log(payload)
    }

    return (
        <div className='header'>
            <div className='header__left-block'>
                <LogoIcon size={45}/>
                <Title level={4} className='header__left-block_title'>
                    <Link to={`/user/${myId}/profile`}>моя <br/> страница</Link>
                </Title>
                <Title level={4} className='header__left-block_title'>
                    <Link to={`/user/${myId}/allUsers`}>все <br/> пользователи</Link>
                </Title>
            </div>
            <div className='header__center-block'>
                <Search placeholder="поиск" onSearch={onSearch} style={{width: 230}}/>
            </div>
            <div className='header__right-block'>
                <Title level={4} className='header__right-block_title'>
                    <Link to={`/user/${myId}/editProfile`}>редактировать <br/> профиль</Link>
                </Title>
                <Badge showZero={false} count={data?.getNotifications?.notifications.length}>
                    <Popover content={false} placement="bottomRight">
                        <div className='header__right-block_icon'>
                            <BellIcon/>
                        </div>
                    </Popover>
                </Badge>
                <Popover destroyTooltipOnHide={!projectMenuList.filter(item => item.path == location).length}
                         content={<ProjectMenu myId={myId}/>}
                         placement="bottomRight">
                    <div className='header__right-block_icon'>
                        <SettingsIcon/>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default Header;
