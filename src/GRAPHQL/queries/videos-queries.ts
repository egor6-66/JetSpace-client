import {gql} from "@apollo/client";
import {videosModel} from "../models/video/videos";


export const GET_ALL_USER_VIDEOS = gql`
    query getAllUserVideos($id: ID){
        getAllUserVideos(id: $id){
            ${videosModel}
        }
    }
`
