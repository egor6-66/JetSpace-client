import {gql} from "@apollo/client";
import {likeType} from "../types/like-type";


export const LIKE_POST_SUB = gql`
    subscription {
        newLike{
            ${likeType}
        }
    }
`