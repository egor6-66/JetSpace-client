import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_POSTS} from "../../../GRAPHQL/queries/post-queries";
import {ADD_POST, SEND_DISLIKE_POST} from "../../../GRAPHQL/mutations/post-mutations";
import {SEND_LIKE_POST} from "../../../GRAPHQL/mutations/post-mutations";
import postSubscriptions from "./post-subscriptions";
import {sendDislike, sendLike} from '../../../assets/functions/likeAndDislike'
import {Input, Button, Typography} from "antd";
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

    const {Title, Text} = Typography;

    const [newPost, setNewPost] = useState<string>('')

    const [addPost] = useMutation(ADD_POST);
    const [sendLikePost] = useMutation(SEND_LIKE_POST);
    const [sendDislikePost] = useMutation(SEND_DISLIKE_POST);

    const {data, refetch, loading, error, subscribeToMore} = useQuery(GET_USER_POSTS, {
        fetchPolicy: `${myId === currentId ? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {id: currentId}
    });

    useEffect(() => {
        postSubscriptions(subscribeToMore)
    }, [])

    const sendNewPost = async () => {
        await addPost({
            variables: {
                userId: myId,
                content: newPost
            }
        });
        setNewPost('')
    }

    const likeClick = async (id: string, likes: any[]) => {
        await sendLike({action: sendLikePost, postId: id, currentId, myId})
    }

    const dislikeClick = async (id: string, dislikes: any[]) => {
        await sendDislike({action: sendDislikePost, postId: id, currentId, myId})
    }

    return (
        <div className='posts'>
            {myId === currentId &&
            <div className='posts__form'>
                <Input allowClear={true} value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
                <Button onClick={sendNewPost}>
                    Submit
                </Button>
            </div>
            }
            <div className='posts__list'>
                {data?.getUserPosts?.posts?.map(({id, date, content, likes, dislikes}: any) =>
                    <div key={id} className='posts__list_item post-item'>
                        <div className='post-item__top-block'>
                            <img className='post-item__top-block_avatar' src={avatar} alt=""/>
                            <div className='post-item__top-block_userNameAndData'>
                                <Title level={4}>{name} {lastName}</Title>
                                <Text>{date}</Text>
                            </div>
                        </div>
                        <div className='post-item__center-block'>
                            <Title level={5}>{content}</Title>
                        </div>
                        <div className='post-item__bottom-block'>
                            <HeartOutlined onClick={() => likeClick(id, likes)}/>
                            ----{likes && likes.length}
                            <HeartOutlined onClick={() => dislikeClick(id, dislikes)}/>-
                            ---{dislikes && dislikes.length}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPosts;
