import {gql} from "@apollo/client";
import postData from "./post-data";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $name: String, $lastName: String, $avatar: String, $content: String){
        addPost(userId: $userId, userName: $name, userLastName: $lastName, userAvatar: $avatar content: $content){
          ${postData}
        }
    }
`

export const LIKE_POST = gql`
    mutation likePost($ownersId: ID, $postId: ID, $userId: ID, $name: String, $lastName: String){
        likePost(ownersId: $ownersId, postId: $postId, userId: $userId, userName: $name, userLastName: $lastName){
            ${postData}
        }
    }
`
