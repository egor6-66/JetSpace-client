import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_POSTS} from "../../../GRAPHQL/queries/post-queries";
import {ADD_POST} from "../../../GRAPHQL/mutations/post-mutations";
import {SEND_LIKE_POST} from "../../../GRAPHQL/mutations/like-post-mutations";
import postSubscriptions from "./post-subscriptions";
import {Input, Button} from "antd";
import {HeartOutlined} from "@ant-design/icons";
import './user-posts.less';


interface UserPostsProps {
    myId: string | undefined,
    currentId: string | undefined,
}

const UserPosts: FC<UserPostsProps> = ({myId, currentId}) => {

    const [newPost, setNewPost] = useState<string>('')

    const [addPost] = useMutation(ADD_POST);
    const [sendLikePost] = useMutation(SEND_LIKE_POST);

    const {data, refetch, loading, error, subscribeToMore} = useQuery(GET_USER_POSTS, {
        fetchPolicy: `${myId === currentId ? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {id: currentId}
    });

    useEffect(() => {
        postSubscriptions(subscribeToMore)
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
        await sendLikePost({
            variables: {
                ownerId: currentId,
                postId: postId,
                userId: myId,
            }
        })
    }
    return (
        <div className='posts'>
            {myId === currentId &&
            <div className='posts__post-form'>
                <Input allowClear={true} value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
                <Button onClick={sendNewPost}>
                    Submit
                </Button>
            </div>
            }
            <div className='posts_posts-list'>
                {data && data?.getUserPosts?.posts.map(({id, date, time, content, likes}: any) =>
                    <div key={id}>
                        {content}-----{date}-----{time}-----
                        <HeartOutlined onClick={() => sendLike(id)}/>----{likes && likes.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPosts;
