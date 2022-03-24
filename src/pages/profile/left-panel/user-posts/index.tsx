import React, {FC, useEffect, useState} from 'react';
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {GET_USER_POSTS} from "../../../../GRAPHQL/queries/post-queries";
import {ADD_POST, SEND_DISLIKE_POST} from "../../../../GRAPHQL/mutations/post-mutations";
import {SEND_LIKE_POST} from "../../../../GRAPHQL/mutations/post-mutations";
import postSubscriptions from "./post-subscriptions";
import {LikeIcon, DislikeIcon} from '../../../../assets/icons';
import {Input, Button, Typography} from "antd";
import './user-posts.less';
import {useTypedSelector} from "../../../../store";
import {useParams} from "react-router-dom";
import {useActions} from "../../../../store/actions";


interface UserPostsProps {
    myId: string | undefined,
}

const UserPosts: FC<UserPostsProps> = ({myId}) => {

    const {Title, Text} = Typography;
    const {id: currentId} = useParams();
    const {addLike, addDislike, removeLike, removeDislike} = useActions();
    const currentUser = useTypedSelector(state => state.currentUser);

    const [newPost, setNewPost] = useState<string>('')

    const [addPost] = useMutation(ADD_POST);
    const [sendLikePost] = useMutation(SEND_LIKE_POST);
    const [sendDislikePost] = useMutation(SEND_DISLIKE_POST);

    const {data, refetch, loading, error, subscribeToMore} = useQuery(GET_USER_POSTS, {
        fetchPolicy: 'cache-first',
        variables: {id: currentId}
    });

    useEffect(() => {
        postSubscriptions(subscribeToMore, currentId, addLike, addDislike, removeLike, removeDislike)
    }, [currentId])

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
        console.log(likes)
        sendLikePost({
            variables: {
                ownerId: currentId,
                postId: id,
                userId: myId,
            }
        })
    }

    const dislikeClick = async (id: string, dislikes: any[]) => {
        sendDislikePost({
            variables: {
                ownerId: currentId,
                postId: id,
                userId: myId,
            }
        })
    }

    const isActive = (arr: any[]) => {
        return arr.find((i: any) => i.userId === myId)
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
                            <img className='post-item__top-block_avatar' src={currentUser.avatar} alt=""/>
                            <div className='post-item__top-block_userNameAndData'>
                                <Title level={4}>{currentUser.name} {currentUser.lastName}</Title>
                                <Text>{date}</Text>
                            </div>
                        </div>
                        <div className='post-item__center-block'>
                            <Title level={5}>{content}</Title>
                        </div>
                        <div className='post-item__bottom-block'>
                            <div className='post-item__bottom-block_like'>
                                <div className={`like-icon ${isActive(likes) && 'like-icon__active'}`}
                                    onClick={() => likeClick(id, likes)}
                                >
                                    <LikeIcon/>
                                </div>
                                <Title level={4}>{likes && likes.length}</Title>
                            </div>
                            <div className='post-item__bottom-block_dislike' >
                                <div className={`dislike-icon ${isActive(dislikes) && 'dislike-icon__active'}`}
                                     onClick={() => dislikeClick(id, dislikes)}
                                >
                                <DislikeIcon />
                            </div>
                                <Title level={4}>{dislikes && dislikes.length}</Title>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPosts;
