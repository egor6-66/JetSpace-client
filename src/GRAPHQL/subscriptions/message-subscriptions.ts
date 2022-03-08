import {gql} from "@apollo/client";
import {messageModel} from "../models/message-model";


export const MESSAGE_SUB = gql`
    subscription {
        newMessage{
          ${messageModel}
        }
    }
`