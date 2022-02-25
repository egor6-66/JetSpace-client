import {gql} from "@apollo/client";
import {likeType} from "../types/like-type";
import {postType} from "../types/post-type";

export const GET_USER_POSTS = gql`
    query getUserPosts($id: ID){
        getUserPosts(userId: $id){
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
