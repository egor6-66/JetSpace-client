import {PostModel} from "./post-model";

export interface PostSubscriptionModel {
    subscriptionData: {
        data: {
            newPost: PostModel
        }
    }
}