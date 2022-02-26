import {gql} from "@apollo/client";
import {userModel} from "../models/user-model";

export const GET_ALL_USERS = gql`
    query {
        getAllUsers{
            id
            name
            email
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
