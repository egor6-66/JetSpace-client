import {NOTIFICATION_SUB} from "../../GRAPHQL/subscriptions/notification-subscriptions";
import {NotificationsModel} from '../../models/notification/notifications-model';
import {NotificationSubscriptionModel} from "../../models/notification/notification-subscription-model";


const notificationsSubscriptions = (subscribeToMore: any, myId: string) => {
    subscribeToMore({
        document: NOTIFICATION_SUB, updateQuery: (prev: NotificationsModel, {subscriptionData}: NotificationSubscriptionModel)
            :NotificationsModel | undefined => {
            const newNotification = subscriptionData.data.newNotification
            console.log(newNotification)
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
