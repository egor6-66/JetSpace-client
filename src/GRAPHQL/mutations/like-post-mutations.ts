import {gql} from "@apollo/client";
import {postType} from "../types/post-type";
import {likeType} from "../types/like-type";


export const SEND_LIKE_POST = gql`
    mutation addLikePost($ownerId: ID, $postId: ID, $userId: ID){
        addLikePost(ownerId: $ownerId, postId: $postId, userId: $userId){
            id
            posts {
             ${postType}
                likes{
                    ${likeType}
                }
            }
        }
    }
`

