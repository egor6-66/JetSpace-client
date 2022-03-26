import {gql} from "@apollo/client";
import {allLikesModel} from "../models/like/all-likes";



export const GET_ALL_LIKES = gql`
    query getAllLikes($id: ID){
        getAllLikes(id: $id){
               ${allLikesModel}
        }
    }
`
