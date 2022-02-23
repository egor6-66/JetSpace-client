import {gql} from "@apollo/client";


export const EDIT_PROFILE = gql`
    mutation editProfile($id: ID, $name: String, $lastName: String){
        editProfile(id: $id, name: $name, lastName: $lastName){
            id
            name
            lastName
        }
    }
`

export const EDIT_STATUS = gql`
    mutation editStatus($id: ID, $status: String){
        editStatus(id: $id, status: $status){
            id
            status
        }
    }
`
