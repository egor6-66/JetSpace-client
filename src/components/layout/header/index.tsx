import React, {FC, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {useActions} from "../../../store/actions";
import Bell from "../../../assets/icons/bell";
import {GET_NOTIFICATIONS} from "../../../GRAPHQL/queries/notification-queries";
import notificationsSubscriptions from "./notifications-subscriptions";
import soundNotification from '../../../assets/sounds/soundNotification.mp3'
import {Badge, Button, Typography, Input} from "antd";
import './header.less';
import Logo from "../../../assets/icons/logo";
import AudioPlayer from "../../players/audio-player";


interface HeaderProps {
    myId: string | undefined,
}

const Header: FC<HeaderProps> = ({myId}) => {

    const {Paragraph, Title} = Typography;
    const {Search} = Input;

    const {logout} = useActions();
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
                <Logo size={45}/>
                <Title level={5} className='header__right-block_upd'>
                    <Link to={`/user/${myId}/profile`}>моя <br/> страница</Link>
                </Title>
                <Title level={5} className='header__right-block_upd'>
                    <Link to={`/user/${myId}/allUsers`}>все <br/> пользователи</Link>
                </Title>
            </div>
            <div className='header__center-block'>
                <Search placeholder="поиск" onSearch={onSearch} style={{width: 230}}/>
            </div>
            {/*<div style={{marginTop:560}}>*/}
            {/*    <AudioPlayer*/}
            {/*        url='https://soundcloud.com/in3briant/blk-pn3l-skrp-x-in3brin-v-o-i-d?in=maybezawtra/sets/ta4ka&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'*/}
            {/*    />*/}
            {/*</div>*/}

            <div className='header__right-block'>
                <Title level={5} className='header__right-block_upd'>
                    <Link to={`/user/${myId}/editProfile`}>редактировать <br/> профиль</Link>
                </Title>
                <Badge showZero={false} count={data?.getNotifications?.notifications.length}>
                    <Bell/>
                </Badge>
                <Button
                    onClick={() => logout(myId)}
                >
                    Выйти
                </Button>
            </div>
        </div>
    );
};

export default Header;
