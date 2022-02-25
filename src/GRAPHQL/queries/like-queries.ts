import {gql} from "@apollo/client";
import {userType} from '../types/user-type';
import {postType} from "../types/post-type";
import {likeType} from "../types/like-type";


export const GET_LIKE_POST = gql`
    query getUserPosts($id: ID){
        getUserPosts(userId: $id){
           ${userType}
            posts{
               ${postType}
                likes{
                 ${likeType}
                }
            }
        }
    }
`