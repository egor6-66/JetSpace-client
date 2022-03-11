import {gql} from "@apollo/client";
import {messagesModel} from "../models/message/messages-model";

export const GET_MESSAGES = gql`
    query getMessages($myId: ID, $userId: ID){
        getMessages(myId: $myId, userId: $userId){
          ${messagesModel}
        }
    }
`
