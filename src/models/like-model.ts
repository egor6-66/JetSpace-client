export interface ILike {
    __typename: String,
    id: String,
    postId: String,
    userId: String,
    userName: String,
    userLastName: String,
    userAvatar: String,
}

export interface ILikeSubscription {
    subscriptionData: {
        data: {
            newLike: ILike
        }
    }
}