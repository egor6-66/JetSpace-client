import React, {FC, useState} from 'react';
import {ADD_COMMENT} from "../../GRAPHQL/mutations/post-mutations";
import {useMutation} from "@apollo/client";
import {ArrowIcon, SmileIcon} from '../../assets/icons';
import {Button, Input, Modal, Popover} from "antd";
import TextArea from "antd/es/input/TextArea";
import EmojiPicker from "../emoji-picker";


interface AddCommentProps {
    ownerId: string | undefined,
    userId: string | undefined,
    postId: string | undefined,
    newComment: string,
    setNewComment: any,
    post: any,
    scrollBottom: any,
    scrollTop: any,
}

const AddComment: FC<AddCommentProps> = ({ownerId, userId, postId, newComment, setNewComment, post, scrollBottom, scrollTop}) => {

    const [addComment] = useMutation(ADD_COMMENT);

    const onEmojiClick = (event: any, emojiObject: any) => setNewComment(newComment + emojiObject.emoji)


    const submit = async () => {
        await addComment({
            variables: {
                ownerId: ownerId,
                userId: userId,
                postId: postId,
                content: newComment,
            },
        });
        setNewComment('')
        scrollBottom()
    }

    return (
        <>
            <TextArea value={newComment}
                      style={{marginTop: 25, marginBottom: 15, resize: 'none', position: "relative"}}
                      onChange={(e) => setNewComment(e.target.value)}
                      onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && submit()}
            />
            <Popover placement={"left"} content={<EmojiPicker onEmojiClick={onEmojiClick}/>}>
                <div style={{position: "absolute", top:30, right: 4}}>
                    <SmileIcon/>
                </div>
            </Popover>
            <Button onClick={submit}>
                Сохранить
            </Button>
            {post?.comments.length > 6 &&
            <div className='close-post-comment-btn'
                 onClick={() => {
                     scrollTop()
                 }}
            >
                <ArrowIcon/>
            </div>
            }
        </>
    );
};

export default AddComment;