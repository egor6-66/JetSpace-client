import {gql} from "@apollo/client";
import {postModel} from "../models/post-model";
import {likeModel} from "../models/like-model";

export const POST_SUB = gql`
    subscription {
        newPost{
            ${postModel}
            likes{
                ${likeModel}
            }
        }
    }
`