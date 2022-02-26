import {LikeModel} from "../like/like-model";

export interface PostModel {
        __typename: String,
        parentId: String,
        id: String,
        date: String,
        time: String,
        content: String,
        likes: LikeModel[]
}