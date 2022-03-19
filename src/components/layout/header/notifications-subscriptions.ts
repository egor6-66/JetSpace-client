import {NOTIFICATION_SUB} from "../../../GRAPHQL/subscriptions/notification-subscriptions";
import {NotificationModels} from '../../../models'


const notificationsSubscriptions = (subscribeToMore: any, myId: any) => {
    subscribeToMore({
        document: NOTIFICATION_SUB, updateQuery: (prev: NotificationModels.INotifications, {subscriptionData}: NotificationModels.INotificationSubscription)
            :NotificationModels.INotifications | undefined => {
            const newNotification = subscriptionData.data.newNotification
            if(newNotification.userId !== myId){
                if (!prev?.getNotifications) {
                    return {
                        getNotifications: {
                            __typename: "Notification",
                            id: newNotification.parentId,
                            notifications: [newNotification],
                        }
                    }
                } else {
                    const prevData = prev?.getNotifications
                    const updateNotifications = Object.assign({}, prevData,
                        {notifications: [newNotification, ...prevData.notifications]})
                    return {getNotifications: updateNotifications}
                }
            }
        }
    })
}

export default notificationsSubscriptions;
