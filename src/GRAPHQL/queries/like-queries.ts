import {gql} from "@apollo/client";



export const GET_ALL_LIKES = gql`
    query getAllLikes($id: ID){
        getAllLikes(id: $id){
                like{
                    id
                    date
                    userName
                    userLastName
                    userAvatar
                }
                post {
                    date
                    content
                }
        }
    }
`
