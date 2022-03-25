import {gql} from "@apollo/client";
import {postModel} from "../models/post/post-model";
import {likeModel} from "../models/like/like-model";
import {dislikeModel} from "../models/dislike/dislike-model";
import {commentModel} from "../models/comment/comment-model";


export const POST_SUB = gql`
    subscription ($id: String) {
        newPost(id: $id){
            ${postModel}
            likes{
                ${likeModel}
            }
            dislikes{
                ${dislikeModel}
            }
        }
    }
`

export const COMMENT_POST_SUB = gql`
    subscription  {
        newComment{
            ${commentModel}
        }
    }
`

export const LIKE_POST_SUB = gql`
    subscription {
        newLike{
            ${likeModel}
        }
    }
`
export const DISLIKE_POST_SUB = gql`
    subscription {
        newDislike{
            ${dislikeModel}
        }
    }
`