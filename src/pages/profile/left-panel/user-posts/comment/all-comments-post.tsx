import React, {FC, useEffect, useRef, useState} from 'react';
import AddComment from "./add-comment";
import moment from "moment";
import {ArrowIcon, SayIcon} from "../../../../../assets/icons";
import {UseAnimate} from '../../../../../assets/hooks';
import {Avatar, Modal, Typography} from "antd";
import {motion, AnimatePresence} from "framer-motion";
import './comments-post.less';


interface AllCommentsPostProps {
    ownerId: string | undefined,
    userId: string | undefined,
    post: any,
    activePostId: boolean,
    setActivePostId: any,
    scrollBottom: any,
    scrollTop: any,
    commentsRef: any
}


const AllCommentsPost: FC<AllCommentsPostProps> = ({ownerId, userId, post, activePostId, setActivePostId, scrollBottom, scrollTop,commentsRef}) => {

        const {Title, Text} = Typography;

        const [newComment, setNewComment] = useState<string>('');

        return (
                <motion.div className='comments-post'
                            ref={commentsRef}
                            initial='hidden'
                            animate="visible"
                            exit='exit'
                            variants={UseAnimate('smoothOpen')}
                >
                    {post?.comments.length > 6 &&
                    <div className='comments-post__down' onClick={scrollBottom}>
                        <div className='down-icon'>
                            <ArrowIcon/>
                        </div>
                    </div>}
                    <div className='comments-post__content'>
                        {post?.comments?.map((comment: any, index: number) =>
                            <motion.div key={comment?.id} className='post-comment'>
                                <Text style={{textAlign: 'center'}}>{moment.unix(comment?.date).calendar()}</Text>
                                <div className='post-comment_user-info'>
                                    <div className='post-comment-avatar'>
                                        <Avatar src={comment?.userAvatar} size={40}/>
                                    </div>
                                    <Title level={4}>{comment?.userName} {comment?.userLastName}</Title>
                                </div>
                                <div className='post-comment_content'>
                                    <Title level={5}>{comment?.content}</Title>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    <div className='comments-post__footer'>
                        <AddComment
                            ownerId={ownerId}
                            postId={post?.id}
                            userId={userId}
                            newComment={newComment}
                            setNewComment={setNewComment}
                            post={post}
                            scrollBottom={scrollBottom}
                            scrollTop={scrollTop}
                            />
                    </div>
                </motion.div>
        );
    }
;

export default AllCommentsPost;