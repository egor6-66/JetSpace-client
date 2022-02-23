import { gql } from "@apollo/client";
import { client } from "../../index";


export const UserWriteFragment = ({id, args}: any) => {
    const keys = Object.keys(args)

    return client.writeFragment({
        id: `User:${id}`,
        fragment: gql`
            fragment user on User {
                ${keys}
            }
        `,
        data: {
            __typename: 'User',
            ...args
        }
    })
};

export const UserReadFragment = ({id, args}:any) => {

    return client.readFragment({
        id: `User:${id}`,
        fragment: gql`
            fragment my_fragment on User {
                ${args}
            }
        `,
    });
};
