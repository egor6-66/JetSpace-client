import {gql} from "@apollo/client";
import {messagesModel} from "../models/messages-model";

export const ADD_MESSAGE = gql`
    mutation addMessage($myId: ID $userId: ID, $content: String){
        addMessage(myId: $myId, userId: $userId,  content: $content){
            ${messagesModel}
        }
    }
`