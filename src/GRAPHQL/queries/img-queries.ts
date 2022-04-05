import {gql} from "@apollo/client";
import {imagesModel} from "../models/image/images";


export const GET_ALL_USER_IMG = gql`
    query getAllUserImg($id: ID){
        getAllUserImg(id: $id){
          ${imagesModel}
        }
    }
`
