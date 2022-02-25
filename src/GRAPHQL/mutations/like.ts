import {gql} from "@apollo/client";


export const SEND_LIKE_POST = gql`
    mutation likePost($ownerId: ID, $postId: ID, $userId: ID, $name: String, $lastName: String){
        likePost(ownerId: $ownerId, postId: $postId, userId: $userId, userName: $name, userLastName: $lastName){
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

