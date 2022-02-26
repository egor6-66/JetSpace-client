import {gql} from "@apollo/client";
import {notificationModel} from "../models/notification-model";


export const NOTIFICATION_SUB = gql`
    subscription {
        newNotification{
           ${notificationModel}
        }
    }
`