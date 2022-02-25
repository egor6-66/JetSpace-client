import {gql} from "@apollo/client";


export const ADD_POST = gql`
    mutation addPost($userId: ID, $content: String){
        addPost(userId: $userId,  content: $content){
            id
            posts {
                id
                date
                time
                content
                likes{
                    id
                    name
                    lastName
                }
            }
        }
    }
`

