import {gql} from "@apollo/client";


export const GET_USER_POSTS = gql`
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
            }
        }
    }
`
