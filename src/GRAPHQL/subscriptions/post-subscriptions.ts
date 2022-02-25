import {gql} from "@apollo/client";
import {postType} from "../types/post-type";
import {likeType} from "../types/like-type";

export const POST_SUB = gql`
    subscription {
        newPost{
            ${postType}
            likes{
                ${likeType}
            }
        }
    }
`