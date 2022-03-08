import {DISLIKE_POST_SUB, POST_SUB} from "../../../GRAPHQL/subscriptions/post-subscriptions";
import {LIKE_POST_SUB} from "../../../GRAPHQL/subscriptions/post-subscriptions";
import {PostsModel} from "../../../models/post/posts-model";
import {PostSubscriptionModel} from "../../../models/post/post-subscription-model";
import {LikeSubscriptionModel} from "../../../models/like/like-subscription-model";
import {DislikeSubscriptionModel} from '../../../models/dislike/dislike-subscription-model'


const postSubscriptions = (subscribeToMore: any) => {
    subscribeToMore({
        document: POST_SUB,
        updateQuery: (prev: PostsModel | null, {subscriptionData}: PostSubscriptionModel): PostsModel => {
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
        updateQuery: (prev: any | null, {subscriptionData}: LikeSubscriptionModel): any => {
            const prevPostsData = prev?.getUserPosts?.posts
            console.log('ok')
            const newLike = subscriptionData?.data?.newLike
            const updatePosts = prevPostsData?.map((post: any) =>
                post.id == newLike.postId ? Object.assign({}, post, {likes: [newLike, ...post.likes]}) : post)
            const newData = Object.assign({}, prev?.getUserPosts, {posts: updatePosts})
            return {getUserPosts: newData}
        }
    })
    subscribeToMore({
        document: DISLIKE_POST_SUB,
        updateQuery: (prev: PostsModel | null, {subscriptionData}: DislikeSubscriptionModel): PostsModel => {
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