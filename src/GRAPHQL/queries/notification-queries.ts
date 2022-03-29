import {gql} from "@apollo/client";
import {notificationModel} from "../models/notification/notification-model";
import {notificationSubModel} from "../models/notification/notification-sub-model";


export const GET_NOTIFICATIONS_SUB = gql`
    query getNotificationsSub($myId: ID){
        getNotificationsSub(myId: $myId){
            id
            notifications {
                ${notificationSubModel}
            }
        }
    }
`

export const GET_NOTIFICATIONS = gql`
    query getNotifications($myId: ID){
        getNotifications(myId: $myId){
            id
            notifications {
                ${notificationModel}
            }
        }
    }
`
