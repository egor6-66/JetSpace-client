import {gql} from 'apollo-boost';


export const EDIT_USER = gql`
    mutation editUser($input: UserInput){
        editUser(input: $input){
            name
        }
    }
`

export const EDIT_USER_AVATAR = gql`
    mutation editUserAvatar($input: UserInput){
        editUserAvatar(input: $input){
            avatar
        }
    }
`

export const EDIT_USER_STATUS = gql`
    mutation editUserStatus($input: UserInput){
        editUserStatus(input: $input){
            status
        }
    }
`