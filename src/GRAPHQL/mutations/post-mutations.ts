import {gql} from "@apollo/client";
import {postsModel} from "../models/post/posts-model";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $content: String){
        addPost(userId: $userId,  content: $content){
            ${postsModel}
        }
    }
`
export const SEND_LIKE_POST = gql`
    mutation addLikePost($ownerId: ID, $postId: ID, $userId: ID){
        addLikePost(ownerId: $ownerId, postId: $postId, userId: $userId){
            ${postsModel}
        }
    }
`

export const SEND_DISLIKE_POST = gql`
    mutation addDislikePost($ownerId: ID, $postId: ID, $userId: ID){
        addDislikePost(ownerId: $ownerId, postId: $postId, userId: $userId){
            ${postsModel}
        }
    }
`


