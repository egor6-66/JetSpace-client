import {gql} from "@apollo/client";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $name: String, $lastName: String, $avatar: String, $content: String){
        addPost(userId: $userId, userName: $name, userLastName: $lastName, userAvatar: $avatar content: $content){
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
