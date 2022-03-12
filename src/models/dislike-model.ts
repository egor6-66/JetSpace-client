export interface IDislike {
    __typename: String,
    id: String,
    postId: String,
    userId: String,
    userName: String,
    userLastName: String,
    userAvatar: String,
}

export interface IDislikeSubscription {
    subscriptionData: {
        data: {
            newDislike: IDislike
        }
    }
}