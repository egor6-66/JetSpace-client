import {gql} from "@apollo/client";
import {userModel} from "../models/user/user-model";

export const GET_ALL_USERS = gql`
    query {
        getAllUsers{
            id
            name
            lastName
            email
            avatar
            isOnline
            subscribers{
                userId
            }
            subscriptions{
                userId
            }
        }
    }
`

export const GET_USER = gql`
    query getUser($userId: ID){
        getUser(userId: $userId){
           ${userModel}
        }
    }
`
