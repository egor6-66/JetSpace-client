import {gql} from "@apollo/client";
import {imagesModel} from "../models/image/images";


export const REMOVE_PHOTO = gql`
    mutation removePhoto($id: ID, $photoId: ID){
        removePhoto(id: $id, photoId: $photoId){
            ${imagesModel}
        }
    }
`