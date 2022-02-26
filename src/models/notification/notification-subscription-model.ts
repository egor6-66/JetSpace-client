import {NotificationModel} from "./notification-model";


export interface NotificationSubscriptionModel {
    subscriptionData: {
        data: {
            newNotification: NotificationModel
        }
    }
}