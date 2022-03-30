export const getUpdPosts = (posts: any, newElement: any, action: string) => {

    if (action === 'addLike') {
        return posts?.map((post: any) => {
            if (post.id === newElement?.postId) {
                const updDislikes = post?.dislikes.filter((dislike: any) => dislike.userId !== newElement.userId)
                return Object.assign({}, post, {dislikes: updDislikes, likes: [newElement, ...post.likes]})
            }
            return post
        })
    }
    if (action === 'addDislike') {
        return posts?.map((post: any) => {
            if (post.id === newElement?.postId) {
                const updLikes = post?.likes.filter((like: any) => like.userId !== newElement.userId)
                return Object.assign({}, post, {likes: updLikes, dislikes: [newElement, ...post.dislikes]})
            }
            return post
        })
    }
    if (action === 'addComment') {
        return posts?.map((post: any) => {
            if (post.id === newElement?.postId) {
                return Object.assign({}, post, {comments: [...post.comments, newElement]})
            }
            return post
        })
    }
}

