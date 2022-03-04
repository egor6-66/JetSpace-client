interface likeAndDislikeProps {
    action: any,
    postId: string | undefined,
    currentId: string | undefined,
    myId: string | undefined,
}

export const sendLike = async (args: likeAndDislikeProps) => {
    await args.action({
        variables: {
            ownerId: args.currentId,
            postId: args.postId,
            userId: args.myId,
        }
    })
}

export const sendDislike = async (args: likeAndDislikeProps) => {
     await args.action({
        variables: {
            ownerId: args.currentId,
            postId: args.postId,
            userId: args.myId,
        }
    })
}