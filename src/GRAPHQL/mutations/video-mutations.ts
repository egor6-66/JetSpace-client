import {gql} from "@apollo/client";
import {videosModel} from "../models/video/videos";



export const ADD_VIDEO = gql`
    mutation addVideo($id: ID, $name: String, $path: String){
        addVideo(id: $id,  name: $name, path: $path){
            ${videosModel}
        }
    }
`