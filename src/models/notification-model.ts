export interface INotification{
    content: String,
    date: String,
    id: String,
    parentId: String,
    time: String,
    title: String,
    userAvatar: String,
    userId: String,
    __typename: String,
}

export interface INotifications {
    getNotifications: {
        __typename: String,
        id: String,
        notifications: INotification[]
    }
}

export interface INotificationSubscription {
    subscriptionData: {
        data: {
            newNotification: INotification
        }
    }
}