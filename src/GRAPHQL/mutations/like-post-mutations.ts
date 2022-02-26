import {gql} from "@apollo/client";
import {postModel} from "../models/post-model";
import {likeModel} from "../models/like-model";


export const SEND_LIKE_POST = gql`
    mutation addLikePost($ownerId: ID, $postId: ID, $userId: ID){
        addLikePost(ownerId: $ownerId, postId: $postId, userId: $userId){
            id
            posts {
             ${postModel}
                likes{
                    ${likeModel}
                }
            }
        }
    }
`

