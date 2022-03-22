import {DISLIKE_POST_SUB, POST_SUB} from "../../../../GRAPHQL/subscriptions/post-subscriptions";
import {LIKE_POST_SUB} from "../../../../GRAPHQL/subscriptions/post-subscriptions";
import {PostModels, LikeModels, DislikeModels} from '../../../../models'


const postSubscriptions = (subscribeToMore: any) => {
    subscribeToMore({
        document: POST_SUB,
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
            const prevPostsData = prev?.getUserPosts?.posts
            const newLike = subscriptionData?.data?.newLike
            const updatePosts = prevPostsData?.map((post: any) =>
                post.id == newLike.postId ? Object.assign({}, post, {likes: [newLike, ...post.likes]}) : post)
            const newData = Object.assign({}, prev?.getUserPosts, {posts: updatePosts})
            return {getUserPosts: newData}
        }
    })
    subscribeToMore({
        document: DISLIKE_POST_SUB,
        updateQuery: (prev: PostModels.IPosts | null, {subscriptionData}: DislikeModels.IDislikeSubscription): PostModels.IPosts => {
            const prevPostsData = prev?.getUserPosts?.posts
            const newDislike = subscriptionData?.data?.newDislike
            const updatePosts = prevPostsData?.map((post: any) =>
                post.id == newDislike.postId ? Object.assign({}, post, {dislikes: [newDislike, ...post.dislikes]}) : post)
            const newData = Object.assign({}, prev?.getUserPosts, {posts: updatePosts})
            return {getUserPosts: newData}
        }
    })
}

export default postSubscriptions;