import React, {FC, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_NOTIFICATIONS} from "../../GRAPHQL/queries/notification-queries";
import notificationsSubscriptions from "./notifications-subscriptions";
import './notifications.less';
import {Typography} from "antd";
import moment from "moment";


interface NotificationsProps {
    myId: string | undefined,
    currentId: string | undefined,
}

const Notifications: FC<NotificationsProps> = ({myId, currentId}) => {

    const {Title, Text} = Typography;

    const {data, loading} = useQuery(GET_NOTIFICATIONS, {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'network-only',
        variables: {myId: myId}
    });

    const getActionType = (action: string) => {
        if (action === 'add-like-post') return 'нравится ваш пост'
    }

    return (
        <div>
            {data?.getNotifications?.notifications?.map((item: any) =>
                <div key={item.id}>
                    <Title>{item.userName} {item.userLastName}</Title>
                    <Text>{getActionType(item.action)}</Text>
                    <Text>сделанный {moment.unix(item.contentDate).calendar()}</Text>
                    <Text>{item.content}</Text>
                </div>
            )}
            Notifications
        </div>
    );
};

export default Notifications;