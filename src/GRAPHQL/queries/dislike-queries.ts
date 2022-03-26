import {gql} from "@apollo/client";
import {allDislikesModel} from "../models/dislike/all-dislike";


export const GET_ALL_DISLIKES = gql`
    query getAllDislikes($id: ID){
        getAllDislikes(id: $id){
            ${allDislikesModel}
        }
    }
`
