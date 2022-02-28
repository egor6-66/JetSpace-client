import {gql} from "@apollo/client";


export const GET_ALL_USER_IMG = gql`
    query getAllUserImg($id: ID){
        getAllUserImg(id: $id){
            id
            userId
            images {
                parentId
                id
                path
            }
        }
    }
`
