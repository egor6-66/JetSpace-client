import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {notificationModel} from "../../models/notifications-model";
import { useActions } from "../../assets/hooks/useActions";
import Bell from "../../assets/icon/bell";
import {GET_NOTIFICATIONS} from "../../GRAPHQL/queries/notification-queries";
import {NOTIFICATION_SUB} from "../../GRAPHQL/subscriptions/notification-subscriptions";
import { Badge, Button } from "antd";
import './header.less';


interface HeaderProps {
    myId: string,
}

const Header:FC<HeaderProps> = ({myId}) => {

    const {logout} = useActions();
    const {id: currentId} = useParams();

    const [notifications, setNotifications] = useState<notificationModel[] | null>(null)

    const {data, loading, subscribeToMore} = useQuery(GET_NOTIFICATIONS, {
        fetchPolicy: `${myId === currentId ? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {myId: myId}
    });

    useEffect(() => {
       if(myId === currentId){
           subscribeToMore({
               document: NOTIFICATION_SUB, updateQuery: (prev, {subscriptionData}) => {
                   const prevData = prev.getNotifications
                   const newNotification = subscriptionData.data.newNotification
                   const updateNotifications = Object.assign({}, prevData,
                       {notifications: [newNotification, ...prevData.notifications]})
                   return {getNotifications: updateNotifications}
               }
           })
       }
    }, [])

    useEffect(() => {
        if(!loading){
            setNotifications(data?.getNotifications?.notifications)
        }
    },[data, loading])


    return (
        <div className='header'>
                <div className='header__left-block'>
                    left-block
                </div>
                <div className='header__right-block'>
                    <Badge count={notifications ? notifications.length : false}>
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
