import React, {FC, useEffect, useRef, useState} from 'react';
import AddComment from "./add-comment";
import {animationVariant} from '../helpers';
import moment from "moment";
import {DownIcon, SayIcon} from "../../../../../assets/icons";
import {Avatar, Modal, Typography} from "antd";
import {motion, AnimatePresence} from "framer-motion";
import './comments-post.less'


interface AllCommentsPostProps {
    ownerId: string | undefined,
    userId: string | undefined,
    post: any,
    activePostId: boolean,
    setActivePostId: any,
}


const AllCommentsPost: FC<AllCommentsPostProps> = ({ownerId, userId, post, activePostId, setActivePostId}) => {

        const {Title, Text} = Typography;
        const comment: any = useRef(null);

        const [newComment, setNewComment] = useState<string>('');

        const scrollBottom = () => {
            setTimeout(() => comment?.current?.scrollIntoView({behavior: "smooth", block: "end"}), 50)
        };

        return (
            <AnimatePresence>
                <motion.div ref={comment} className='comments-post'
                            variants={animationVariant}
                            initial='hidden'
                            animate="visible"
                            exit='exit'
                >
                    <div className='comments-post__down' onClick={scrollBottom}>
                        <div className='down-icon'>
                            <DownIcon/>
                        </div>
                    </div>
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
                            setActivePostId={setActivePostId}
                            scrollBottom={scrollBottom}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
        );
    }
;

export default AllCommentsPost;