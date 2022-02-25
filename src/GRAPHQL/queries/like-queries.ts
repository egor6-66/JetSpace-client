import {gql} from "@apollo/client";


export const GET_LIKE_POST = gql`
    query getUserPosts($id: ID){
        getUserPosts(userId: $id){
            id
            userName
            userLastName
            userAvatar
            posts{
                id
                date
                time
                content
                likes{
                    id
                    name
                    lastName
                }
            }
        }
    }
`