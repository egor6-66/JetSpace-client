import {gql} from "@apollo/client";
import {notificationModel} from "../models/notification/notification-model";
import {notificationSubModel} from "../models/notification/notification-sub-model";


export const NOTIFICATION_SUB = gql`
    subscription($myId: ID) {
        newNotification(myId: $myId){
            ${notificationSubModel}
        }
    }
`