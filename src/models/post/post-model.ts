import {LikeModel} from "../like/like-model";

export interface PostModel {
    __typename: String,
    userId: String,
    id: String,
    date: String,
    time: String,
    content: String,
    likes: LikeModel[]
}