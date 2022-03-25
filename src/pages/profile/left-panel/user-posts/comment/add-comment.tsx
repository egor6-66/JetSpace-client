import React, {FC, useState} from 'react';
import {ADD_COMMENT} from "../../../../../GRAPHQL/mutations/post-mutations";
import {useMutation} from "@apollo/client";
import {CloseIcon} from '../../../../../assets/icons';
import {Button, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";


interface AddCommentProps {
    ownerId: string | undefined,
    userId: string | undefined,
    postId: string | undefined,
    newComment: string,
    setNewComment: any,
    setActivePostId: any,
    scrollBottom: any,
}

const AddComment: FC<AddCommentProps> = ({ownerId, userId, postId, newComment, setNewComment, setActivePostId, scrollBottom}) => {

    const [addComment] = useMutation(ADD_COMMENT);

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
                      style={{marginTop: 25, marginBottom: 15, resize: 'none'}}
                      onChange={(e) => setNewComment(e.target.value)}
                      onPressEnter={e => e.code === 'Enter' && !e.ctrlKey && !e.altKey && submit()}
            />
            <Button onClick={submit}>
                Сохранить
            </Button>
            <div className='close-post-comment-btn'
                 onClick={() => setActivePostId(null)}
            >
                <CloseIcon/>
            </div>
        </>
    );
};

export default AddComment;