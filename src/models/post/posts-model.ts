import {PostModel} from "./post-model";


export interface PostsModel {
    getUserPosts: {
        __typename: String,
        userId: String,
        posts: PostModel[],
    }
}