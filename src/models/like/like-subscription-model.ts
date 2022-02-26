import {LikeModel} from "./like-model";

export interface LikeSubscriptionModel {
    subscriptionData: {
        data: {
            newLike: LikeModel
        }
    }
}