import {ILike} from "./like-model";


export interface IPost {
    __typename: String,
    userId: String,
    id: String,
    date: String,
    time: String,
    content: String,
    likes: ILike[]
}

export interface IPosts {
    getUserPosts: {
        __typename: String,
        userId: String,
        posts: IPost[],
    }
}

export interface IPostSubscription {
    subscriptionData: {
        data: {
            newPost: IPost
        }
    }
}