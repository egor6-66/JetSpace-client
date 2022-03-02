import {gql} from "@apollo/client";
import {userModel} from "../models/user-model";

export const EDIT_PROFILE = gql`
    mutation editProfile($id: ID, $name: String, $lastName: String, $headerAvatar: String $theme: String){
        editProfile(id: $id, name: $name, lastName: $lastName, headerAvatar: $headerAvatar theme: $theme){
            ${userModel}
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
