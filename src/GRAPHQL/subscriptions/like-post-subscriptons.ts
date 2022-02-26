import {gql} from "@apollo/client";
import {likeModel} from "../models/like-model";


export const LIKE_POST_SUB = gql`
    subscription {
        newLike{
            ${likeModel}
        }
    }
`