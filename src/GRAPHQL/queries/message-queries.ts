import {gql} from "@apollo/client";
import {messagesModel} from "../models/message/messages-model";

export const GET_MESSAGES = gql`
    query getMessages($myId: ID, $userId: ID){
        getMessages(myId: $myId, userId: $userId){
          ${messagesModel}
        }
    }
`

export const GET_USER_TYPING = gql`
    query userTypingSub($myId: ID, $userId: ID){
        userTypingSub(myId: $myId, userId: $userId){
            userName
        }
    }
`
