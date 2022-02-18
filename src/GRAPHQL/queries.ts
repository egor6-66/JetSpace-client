import {gql} from 'apollo-boost';

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
    query getUser($id: ID){
        getUser(id: $id){
            name
            lastName
            status
        }
    }
`