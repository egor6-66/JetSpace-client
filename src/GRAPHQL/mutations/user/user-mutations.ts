import {gql} from "@apollo/client";
import userData from "./user-data";


export const EDIT_PROFILE = gql`
    mutation editProfile($id: ID, $name: String, $lastName: String){
        editProfile(id: $id, name: $name, lastName: $lastName){
            ${userData}
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
