import {PostModel} from "./post-model";


export interface PostsModel {
    getUserPosts: {
        __typename: String,
        id: String,
        posts: PostModel[],
    }
}