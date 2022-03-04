import {DislikeModel} from "./dislike-model";

export interface DislikeSubscriptionModel {
    subscriptionData: {
        data: {
            newDislike: DislikeModel
        }
    }
}