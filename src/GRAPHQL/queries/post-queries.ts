import {gql} from "@apollo/client";
import {likeModel} from "../models/like-model";
import {postModel} from "../models/post-model";
import {dislikeModel} from "../models/dislike-model";

export const GET_USER_POSTS = gql`
    query getUserPosts($id: ID){
        getUserPosts(userId: $id){
            userId
            posts {
                ${postModel}
                likes{
                    ${likeModel}
                }
                dislikes{
                    ${dislikeModel}
                }
            }
        }
    }
`
