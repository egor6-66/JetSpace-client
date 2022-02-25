import {gql} from "@apollo/client";


export const GET_ALL_USERS = gql`
    query {
        getAllUsers{
            name
            email
            id
        }
    }
`

export const GET_USER = gql`
    query getUser($userId: ID){
        getUser(userId: $userId){
            id
            name
            lastName
            status
            avatar
            isOnline
        }
    }
`
