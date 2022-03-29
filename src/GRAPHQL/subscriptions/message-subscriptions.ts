import {gql} from "@apollo/client";
import {messageModel} from "../models/message/message-model";


export const MESSAGE_SUB = gql`
    subscription ($userId: String, $myId: String){
        newMessage(userId: $userId, myId: $myId){
          ${messageModel}
        }
    }
`