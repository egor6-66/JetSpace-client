import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_POSTS} from "../../../GRAPHQL/queries/post-queries";
import {ADD_POST} from "../../../GRAPHQL/mutations/post-mutations";
import {SEND_LIKE_POST} from "../../../GRAPHQL/mutations/like";
import {POST_SUB} from "../../../GRAPHQL/subscriptions/post-subscriptions";
import {Input, Button} from "antd";
import {HeartOutlined} from "@ant-design/icons";
import './user-posts.less';


interface UserPostsProps {
    myId: string | undefined,
    currentId: string | undefined,
    name: string | undefined,
    lastName: string | undefined,
    avatar: string | undefined,
}

const UserPosts: FC<UserPostsProps> = ({myId, currentId, name, lastName, avatar}) => {

    const [addPost] = useMutation(ADD_POST);
    const [sendLikePost] = useMutation(SEND_LIKE_POST);

    const {data, refetch, loading, error, subscribeToMore: subToMoreGetUserPost} = useQuery(GET_USER_POSTS, {
        fetchPolicy: `${myId === currentId ? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {id: currentId}
    });

    // const {data: likeData, subscribeToMore: subMoreLike} = useQuery(GET_LIKE_POST, {
    //     fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
    //     nextFetchPolicy: 'cache-only',
    //     variables: {id: currentId}
    // });


    const [newPost, setNewPost] = useState<string>('')

    useEffect(() => {
        subToMoreGetUserPost({
            document: POST_SUB, updateQuery: (prev, {subscriptionData}) => {
                const prevData = prev.getUserPosts
                const newPost = subscriptionData.data.newPost
                const posts = [ newPost, ...prevData.posts]
                return {getUserPosts: {...prevData, posts}}
            }
        })
    }, [])

    const sendNewPost = async () => {
        const response = await addPost({
            variables: {
                userId: myId,
                content: newPost
            }
        });
        !data.getUserPosts && refetch()
        setNewPost('')
    }

    const sendLike = async (postId: string) => {
        console.log(postId)
        const response = await sendLikePost({
            variables: {
                ownerId: currentId,
                postId: postId,
                userId: myId,
                name: name,
                lastName: lastName,
                // avatar: avatar,
            }
        })
    }
    return (
        <div className='posts'>
            <div className='posts__post-form'>
                <Input allowClear={true} value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
                <Button onClick={sendNewPost}>
                    Submit
                </Button>
            </div>
            <div className='posts_posts-list'>
                {data && data?.getUserPosts?.posts.map(({id, date, time, content, likes}: any) =>
                    <div key={id}>
                        {content}-----{date}-----{time}-----
                        <HeartOutlined onClick={() => sendLike(id)}/>----{likes.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPosts;
