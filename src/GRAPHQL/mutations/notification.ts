import {gql} from "@apollo/client";
import {notificationModel} from "../models/notification/notification-model";


export const CLEAR_NOTIFICATIONS = gql`
    mutation clearNotifications($myId: ID ){
        clearNotifications(myId: $myId){
            id
            notifications {
                ${notificationModel}
            }
        }
    }
`
