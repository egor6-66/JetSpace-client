import {gql} from 'apollo-boost';


export const EDIT_USER = gql`
    mutation editUser($input: UserInput){
        editUser(input: $input){
            name
        }
    }
`


export const EDIT_STATUS = gql`
    mutation editStatus($id: ID, $status: String){
        editStatus(id: $id, status: $status){
            name
            lastName
            status
            isOnline
            images {
                userName
                userLastName
                images {
                    path
                }
            }
        }
    }
`
