import {NOTIFICATION_SUB} from "../../GRAPHQL/subscriptions/notification-subscriptions";
import {NotificationModels} from '../../models'


const notificationsSubscriptions = (subscribeToMore: any, myId: any) => {
    subscribeToMore({
        document: NOTIFICATION_SUB,
        variables: {myId: myId},
        updateQuery: (prev: any, {subscriptionData}: any) => {
            const newNotification = subscriptionData.data.newNotification
            if (!prev?.getNotificationsSub) {
                return {
                    getNotificationsSub: {
                        __typename: "NotificationsSub",
                        id: newNotification.ownerId,
                        notifications: [newNotification],
                    }
                }
            } else {
                const prevData = prev?.getNotificationsSub
                const updateNotifications = Object.assign({}, prevData,
                    {notifications: [newNotification, ...prevData.notifications]})
                return {getNotificationsSub: updateNotifications}
            }
        }

    })
}

export default notificationsSubscriptions;
