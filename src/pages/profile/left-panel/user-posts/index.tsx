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
import {Input, Button, Typography, Popover, Collapse} from "antd";
import {motion, AnimatePresence} from "framer-motion";
import './user-posts.less';
import AddComment from "./comment/add-comment";
import AllCommentsPost from "./comment/all-comments-post";
import {UseAnimate, UseSpeech} from "../../../../assets/hooks";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
import EmojiPicker from "../../../../components/emoji-picker";
import Loader from "../../../../components/spinner";


interface UserPostsProps {
    myId: string | undefined,
}

const UserPosts: FC<UserPostsProps> = ({myId}) => {

    const {Title, Text} = Typography;
    const {id: currentId} = useParams();
    const {addLike, addDislike, removeLike, removeDislike} = useActions();
    const currentUser = useTypedSelector(state => state.currentUser);
    const post: any = useRef(null);
    const {Panel} = Collapse;
    const commentsRef: any = useRef(null);
    const [newPost, setNewPost] = useState<string>('');
    const [activePostId, setActivePostId] = useState<any>(null);

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

    const onEmojiClick = (event: any, emojiObject: any) => setNewPost(newPost + emojiObject.emoji)

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

    const scrollBottom = () => {
        setTimeout(() => commentsRef?.current?.scrollIntoView({behavior: "smooth", block: "end"}), 50)
    };

    const scrollTop = () => {
        setTimeout(() => post?.current?.scrollIntoView({behavior: "smooth", block: "start"}), 50)
    };

    return (
        <div className='posts'>
            {myId === currentId &&
            <div className='posts__form'>
                <div className='posts__form_input'>
                    <TextArea className='textarea'
                              value={newPost}
                              onChange={(e) => setNewPost(e.target.value)}
                              onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && sendNewPost()}

                    />
                    <Popover placement={"left"} content={<EmojiPicker onEmojiClick={onEmojiClick}/>}>
                        <div className='emojiPicker'>
                            <SmileIcon/>
                        </div>
                    </Popover>
                </div>
                <Button className='posts__form_submit'
                        onClick={sendNewPost}>
                    Submit
                </Button>
            </div>
            }
            {loading ?
                <div className='posts__loader'>
                    <Loader size={130}/>
                </div>
                :
                !data?.getUserPosts?
                <div><Title>Нет постов</Title></div>
                :
                <div className='posts__list'>
                    <Collapse
                        bordered={false}
                        // onChange={(key) => setActivePostId(key[0])}
                        activeKey={activePostId}
                        destroyInactivePanel={true}
                    >
                        {data?.getUserPosts?.posts?.map(({id, date, content, likes, dislikes, comments}: any, index: number) =>
                            <Panel key={id} showArrow={false} header={
                                <div ref={id === activePostId ? post : null} className='posts__list_item post-item'>
                                    <div className='post-item__top-block'>
                                        <img className='post-item__top-block_avatar' src={currentUser.avatar} alt=""/>
                                        <div className='post-item__top-block_userNameAndData'>
                                            <Title level={4}>{currentUser.name} {currentUser.lastName}</Title>
                                            <Text>{moment.unix(date).calendar()}</Text>
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
                                        <div className='post-item__bottom-block_dislike'>
                                            <div className={`dislike-icon ${isActive(dislikes) && 'dislike-icon__active'}`}
                                                 onClick={() => dislikeClick(id, dislikes)}
                                            >
                                                <DislikeIcon/>
                                            </div>
                                            <Title level={4}>{dislikes && dislikes.length}</Title>
                                        </div>
                                        <div className='post-item__bottom-block_comments' onClick={() => {
                                            id === activePostId ? setActivePostId(null) : setActivePostId(id)
                                        }}>
                                            <div className='comments-icon'>
                                                <CommentsIcon/>
                                            </div>
                                            <Title level={4}>{comments.length}</Title>
                                        </div>
                                    </div>
                                </div>
                            }>
                                <AllCommentsPost
                                    commentsRef={commentsRef}
                                    ownerId={currentId}
                                    userId={myId}
                                    post={data?.getUserPosts?.posts?.find((post: any) => post?.id === activePostId)}
                                    activePostId={activePostId}
                                    setActivePostId={setActivePostId}
                                    scrollBottom={scrollBottom}
                                    scrollTop={scrollTop}
                                />
                            </Panel>
                        )}
                    </Collapse>
                </div>}
        </div>
    );
};

export default UserPosts;
