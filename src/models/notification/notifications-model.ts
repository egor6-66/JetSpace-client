import {NotificationModel} from "./notification-model";


export interface NotificationsModel {
    getNotifications: {
        __typename: String,
        id: String,
        notifications: NotificationModel[]
    }
}