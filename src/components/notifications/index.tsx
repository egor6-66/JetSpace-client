import React, {FC} from 'react';
import {useQuery} from "@apollo/client";
import {GET_NOTIFICATIONS} from "../../GRAPHQL/queries/notification-queries";
import moment from "moment";
import {Typography} from "antd";
import './notifications.less';


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

    const getActionType = (action: string, ) => {
        if (action === 'add-like-post') return `оценил ваш пост`
        if (action === 'add-dislike-post')  return `не понравился ваш пост`
    };

    return (
        <div className='notifications'>
            <div className='notifications__body'>
                <div className='notifications__body_header'>
                    <Title level={3}>уведомления</Title>
                </div>
                <div className='notifications__body_list'>
                    {data?.getNotifications?.notifications.map((item: any) =>
                        <div key={item.id} className='notifications-item'>
                            <Text> {moment.unix(item.date).calendar()} </Text> <br/>
                            <Title level={4}> {item.userName} {item.userLastName} </Title>
                            <Text> {getActionType(item.action)} </Text> <br/>
                            <Text> сделанный {moment.unix(item.contentDate).calendar()}</Text> <br/>
                            <div className='notifications-item__content'>
                                <Text> {item.content} </Text>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;