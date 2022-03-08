import {gql} from "@apollo/client";
import {dialogsModel} from "../models/dialogs-model";


export const GET_ALL_DIALOGS = gql`
    query getAllDialogs($id: ID){
        getAllDialogs(id: $id){
            id
            dialogs{
                ${dialogsModel}
            }
        }
    }
`
