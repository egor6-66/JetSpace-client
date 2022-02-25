import {gql} from "@apollo/client";
import {postType} from "../types/post-type";
import {likeType} from "../types/like-type";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $content: String){
        addPost(userId: $userId,  content: $content){
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

