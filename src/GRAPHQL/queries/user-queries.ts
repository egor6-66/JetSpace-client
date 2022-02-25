import {gql} from "@apollo/client";
import {userType} from "../types/user-type";

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
           ${userType}
        }
    }
`
