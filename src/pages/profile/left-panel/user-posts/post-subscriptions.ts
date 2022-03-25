import {COMMENT_POST_SUB, DISLIKE_POST_SUB, POST_SUB} from "../../../../GRAPHQL/subscriptions/post-subscriptions";
import {LIKE_POST_SUB} from "../../../../GRAPHQL/subscriptions/post-subscriptions";
import {PostModels, LikeModels, DislikeModels} from '../../../../models'
import {getUpdPosts} from "./helpers";


const postSubscriptions = (subscribeToMore: any,
                           currentId: string | undefined, addLike: any, addDislike: any, removeLike: any, removeDislike: any) => {


    subscribeToMore({
        document: POST_SUB,
        variables: {id: currentId},
        updateQuery: (prev: PostModels.IPosts | null, {subscriptionData}: PostModels.IPostSubscription): PostModels.IPosts => {
            const newPost = subscriptionData.data.newPost
            if (!prev?.getUserPosts) {
                return {
                    getUserPosts: {
                        __typename: "Posts",
                        userId: newPost.userId,
                        posts: [newPost],
                    }
                }
            } else {
                const prevData = prev?.getUserPosts
                const updatePosts = Object.assign({}, prevData, {posts: [newPost, ...prevData?.posts]})
                return {getUserPosts: updatePosts}
            }
        }
    })
    subscribeToMore({
        document: LIKE_POST_SUB,
        updateQuery: (prev: PostModels.IPosts | null, {subscriptionData}: LikeModels.ILikeSubscription): PostModels.IPosts => {
            const newElement = subscriptionData?.data?.newLike
            const posts = prev?.getUserPosts.posts
            const updPosts = getUpdPosts(posts, newElement, 'addLike', removeDislike)
            const newData = Object.assign({}, prev?.getUserPosts, {posts: updPosts})
            addLike()
            return {getUserPosts: newData}
        }
    })
    subscribeToMore({
        document: DISLIKE_POST_SUB,
        updateQuery: (prev: PostModels.IPosts | null, {subscriptionData}: DislikeModels.IDislikeSubscription): PostModels.IPosts | any => {
            const newElement = subscriptionData?.data?.newDislike
            const posts = prev?.getUserPosts.posts
            const updPosts = getUpdPosts(posts, newElement, 'addDislike', removeLike)
            const newData = Object.assign({}, prev?.getUserPosts, {posts: updPosts})

            addDislike()
            return {getUserPosts: newData}
        }
    })
    subscribeToMore({
        document:  COMMENT_POST_SUB,
        updateQuery: (prev: any, {subscriptionData}:any): PostModels.IPosts | any => {
            const newComment = subscriptionData.data.newComment
            if (!prev?.getUserPosts) {
                return {
                    getUserPosts: {
                        __typename: "Posts",
                        userId: newComment.userId,
                        posts: [newComment],
                    }
                }
            } else {
                const prevData = prev?.getUserPosts
                const updPosts = getUpdPosts(prevData.posts, newComment, 'addComment')
                const newPostData = Object.assign({}, prevData, {posts: updPosts})
                return {getUserPosts: newPostData}
            }
        }
    })

}

export default postSubscriptions;