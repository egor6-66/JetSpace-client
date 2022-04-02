import {gql} from "@apollo/client";
import {messageModel} from "../models/message/message-model";


export const MESSAGE_SUB = gql`
    subscription ($userId: String, $myId: String){
        newMessage(userId: $userId, myId: $myId){
            ${messageModel}
        }
    }
`
export const USER_TYPING_SUB = gql`
    subscription userTypingSub($myId: String ,$userId: String) {
        userTypingSub(myId: $myId, userId: $userId) {
            userName
            userId
            myId
        }
    }
`;