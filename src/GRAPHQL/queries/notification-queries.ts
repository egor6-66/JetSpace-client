import {gql} from "@apollo/client";
import {notificationModel} from "../models/notification/notification-model";


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
