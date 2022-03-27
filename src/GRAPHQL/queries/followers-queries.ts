import {gql} from "@apollo/client";
import {followersModel} from "../models/followers/followers";


export const GET_ALL_SUBSCRIBERS = gql`
    query getAllSubscribers($id: ID){
        getAllSubscribers(id: $id){
            ${followersModel}
        }
    }
`

export const GET_ALL_SUBSCRIPTIONS = gql`
    query getAllSubscriptions($id: ID){
        getAllSubscriptions(id: $id){
            ${followersModel}
        }
    }
`
