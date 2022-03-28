import {gql} from "@apollo/client";
import {soundsModel} from "../models/sound/sounds";


export const ADD_SOUND = gql`
    mutation addSound($id: ID, $path: String $type: String){
        addSound(id: $id, path: $path type: $type){
            ${soundsModel}
        }
    }
`

export const REMOVE_SOUND = gql`
    mutation removeSound($id: ID, $soundId: ID $type: String){
        removeSound(id: $id, soundId: $soundId type: $type){
            ${soundsModel}
        }
    }
`
