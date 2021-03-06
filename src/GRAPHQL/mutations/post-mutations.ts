import {gql} from "@apollo/client";
import {postsModel} from "../models/post/posts-model";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $content: String){
        addPost(userId: $userId,  content: $content){
            ${postsModel}
        }
    }
`

export const REMOVE_POST = gql`
    mutation removePost($userId: ID, $postId: ID){
        removePost(userId: $userId,  postId: $postId){
            ${postsModel}
        }
    }
`

export const ADD_COMMENT = gql`
    mutation addCommentPost($ownerId: ID, $userId: ID, $postId: ID, $content: String){
        addCommentPost(ownerId: $ownerId, userId: $userId, postId: $postId,  content: $content){
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


