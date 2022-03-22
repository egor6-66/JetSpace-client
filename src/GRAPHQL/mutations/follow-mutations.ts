import {gql} from "@apollo/client";
import {userModel} from "../models/user/user-model";

export const FOLLOW = gql`
    mutation follow($myId: ID, $userId: ID){
        follow(myId: $myId, userId: $userId,){
            ${userModel}
        }
    }
`

export const UNFOLLOW = gql`
    mutation unfollow($myId: ID, $userId: ID){
        unfollow(myId: $myId, userId: $userId,){
            ${userModel}
        }
    }
`