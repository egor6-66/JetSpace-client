import {gql} from "@apollo/client";


export const GET_ALL_USER_IMG = gql`
    query getAllUserImg($id: ID){
        getAllUserImg(id: $id){
            id
            userName
            userLastName
            images {
                path
            }
        }
    }
`
