import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import { useActions } from "../../assets/hooks/useActions";
import useSound from 'use-sound';
import Bell from "../../assets/icon/bell";
import {GET_NOTIFICATIONS} from "../../GRAPHQL/queries/notification-queries";
import {NOTIFICATION_SUB} from "../../GRAPHQL/subscriptions/notification-subscriptions";
import soundNotification from '../../assets/sounds/soundNotification.mp3'
import { Badge, Button } from "antd";
import './header.less';
import notificationsSubscriptions from "./notifications-subscriptions";


interface HeaderProps {
    myId: string,
}

const Header:FC<HeaderProps> = ({myId}) => {

    const {logout} = useActions();
    const {id: currentId} = useParams();
    const [play, {stop}] = useSound(soundNotification);

    const {data, loading, subscribeToMore} = useQuery(GET_NOTIFICATIONS, {
        fetchPolicy: `${myId === currentId ? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId}
    });

    useEffect(() => {
        notificationsSubscriptions(subscribeToMore, myId)
        play()
    }, [])


    return (
        <div className='header'>
                <div className='header__left-block'>
                    left-block
                </div>
                <div className='header__right-block'>
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
