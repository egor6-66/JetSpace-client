import React, {FC, useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "../../../../store";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_POSTS} from "../../../../GRAPHQL/queries/post-queries";
import {ADD_POST, REMOVE_POST, SEND_DISLIKE_POST} from "../../../../GRAPHQL/mutations/post-mutations";
import {SEND_LIKE_POST} from "../../../../GRAPHQL/mutations/post-mutations";
import postSubscriptions from "./post-subscriptions";
import Spinner1 from "../../../../components/spinners/spinner-1";
import PostsList from "./posts-list";
import PostForm from "./post-form";
import {Typography} from "antd";
import './user-posts.less';


interface UserPostsProps {
    myId: string | undefined,
    colors: any,
}

const UserPosts: FC<UserPostsProps> = ({myId, colors}) => {

    const {Title} = Typography;
    const {id: currentId} = useParams();
    const currentUser = useTypedSelector(state => state.currentUser);
    const postRef: any = useRef(null);

    const commentsRef: any = useRef(null);
    const [newPost, setNewPost] = useState<string>('');


    const [addPost] = useMutation(ADD_POST);
    const [removePost] = useMutation(  REMOVE_POST);
    const [sendLikePost] = useMutation(SEND_LIKE_POST);
    const [sendDislikePost] = useMutation(SEND_DISLIKE_POST);

    const {data, loading, subscribeToMore} = useQuery(GET_USER_POSTS, {fetchPolicy: 'cache-first', variables: {id: currentId}});

    useEffect(() => postSubscriptions(subscribeToMore, currentId), [currentId]);

    const sendNewPost = async () => {
        await addPost({variables: {userId: myId, content: newPost}})
        setNewPost('')
    };

    const isActive = (arr: any[]) =>  arr.find((i: any) => i.userId === myId);

    const likeClick = async (id: string) => await sendLikePost({variables: {ownerId: currentId, postId: id, userId: myId,}});
    const dislikeClick = async (id: string) => await sendDislikePost({variables: {ownerId: currentId, postId: id, userId: myId,}});
    const removePostClick = async (id: string) => await removePost({variables: {postId: id, userId: myId,}});

    const scrollBottom = () => commentsRef?.current?.scrollIntoView({behavior: "smooth", block: "end"});
    const scrollTop = () => postRef?.current?.scrollIntoView({behavior: "smooth", block: "start"});

    return (
        <div className='posts'>
            {myId === currentId &&
            <PostForm
                newPost={newPost}
                setNewPost={setNewPost}
                sendNewPost={sendNewPost}
            />
            }
            {loading ?
                <Spinner1 size={230}/>
                :
                !data?.getUserPosts ?
                    <div><Title>Нет постов</Title></div>
                    :
                    <PostsList
                        myId={myId}
                        data={data}
                        currentUser={currentUser}
                        postRef={postRef}
                        likeClick={likeClick}
                        dislikeClick={dislikeClick}
                        isActive={isActive}
                        commentsRef={commentsRef}
                        currentId={currentId}
                        scrollBottom={scrollBottom}
                        scrollTop={scrollTop}
                        colors={colors}
                        removePostClick={removePostClick}
                    />
            }
        </div>
    );
};

export default UserPosts;
