import {gql} from "@apollo/client";
import {userModel} from "../models/user-model";


export const EDIT_PROFILE = gql`
    mutation editProfile(
        $id: ID,
        $name: String,
        $lastName: String,
        $headerAvatar: String,
        $theme: String,
        $instagram: String,
        $facebook: String,
        $twitter: String,
        $spotify: String,
        $telegram: String,
        $github: String,
        $soundCloud: String,
        $youTube: String,)
    {editProfile(
        id: $id,
        name: $name,
        lastName: $lastName,
        headerAvatar: $headerAvatar,
        theme: $theme
        instagram: $instagram
        facebook: $facebook
        twitter: $twitter
        spotify: $spotify
        telegram: $telegram
        github: $github
        soundCloud: $soundCloud
        youTube: $youTube){
        ${userModel}
    }
    }
`

export const EDIT_STATUS = gql`
    mutation editStatus($id: ID, $status: String){
        editStatus(id: $id, status: $status){
            id
            status
        }
    }
`
