import {gql} from "@apollo/client";


export const POST_SUB = gql`
    subscription {
        newPost{
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
`