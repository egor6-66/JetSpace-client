import {soundsModel} from "../models/sound/sounds";


import {gql} from "@apollo/client";


export const GET_ALL_USER_SOUNDS = gql`
    query getAllUserSounds($id: ID){
        getAllUserSounds(id: $id){
            ${soundsModel}
        }
    }
`
