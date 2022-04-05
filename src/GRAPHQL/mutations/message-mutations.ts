import {gql} from "@apollo/client";
import {messagesModel} from "../models/message/messages-model";

export const ADD_MESSAGE = gql`
    mutation addMessage($myId: ID $userId: ID, $type: String $content: String){
        addMessage(myId: $myId, userId: $userId, type: $type content: $content){
            ${messagesModel}
        }
    }
`

export const USER_TYPING = gql`
    mutation userTyping($myId: ID $userId: ID, $userName: String){
        userTyping(myId: $myId, userId: $userId, userName: $userName){
             userId
        }
    }
`


export const SET_MESSAGE_LOCATION = gql`
    mutation setMessageLocation($myId: ID, $location: String){
        setMessageLocation(myId: $myId, location: $location){
            userId
        }
    }
`