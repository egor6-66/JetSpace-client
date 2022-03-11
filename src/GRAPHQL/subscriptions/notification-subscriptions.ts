import {gql} from "@apollo/client";
import {notificationModel} from "../models/notification/notification-model";


export const NOTIFICATION_SUB = gql`
    subscription {
        newNotification{
           ${notificationModel}
        }
    }
`