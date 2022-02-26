import {gql} from "@apollo/client";
import {postModel} from "../models/post-model";
import {likeModel} from "../models/like-model";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $content: String){
        addPost(userId: $userId,  content: $content){
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

