import React, {FC, useEffect, useRef, useState} from 'react';
import {useTypedSelector} from "../../../../store";
import {useParams} from "react-router-dom";
import {useActions} from "../../../../store/actions";
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {GET_USER_POSTS} from "../../../../GRAPHQL/queries/post-queries";
import {ADD_POST, SEND_DISLIKE_POST} from "../../../../GRAPHQL/mutations/post-mutations";
import {SEND_LIKE_POST} from "../../../../GRAPHQL/mutations/post-mutations";
import postSubscriptions from "./post-subscriptions";
import {LikeIcon, DislikeIcon, CommentsIcon, ArrowIcon, SayIcon, SmileIcon} from '../../../../assets/icons';
import {Button, Typography, Popover, Collapse} from "antd";
import './user-posts.less';
import AllComments from "../../../../components/comment/all-comments";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
import EmojiPicker from "../../../../components/emoji-picker";
import Spinner1 from "../../../../components/spinners/spinner-1";
import PostsList from "./posts-list";
import PostForm from "./post-form";


interface UserPostsProps {
    myId: string | undefined,
}

const UserPosts: FC<UserPostsProps> = ({myId}) => {

    const {Title} = Typography;
    const {id: currentId} = useParams();
    const currentUser = useTypedSelector(state => state.currentUser);
    const postRef: any = useRef(null);

    const commentsRef: any = useRef(null);
    const [newPost, setNewPost] = useState<string>('');


    const [addPost] = useMutation(ADD_POST);
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
                    />
            }
        </div>
    );
};

export default UserPosts;
