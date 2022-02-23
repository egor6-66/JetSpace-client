import React, {FC, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_POSTS} from "../../../GRAPHQL/queries/post-queries";
import {ADD_POST, LIKE_POST} from "../../../GRAPHQL/mutations/post/post-mutations";
import {UserReadFragment} from "../../../GRAPHQL/customs-fragments/user-fragments";
import {Input, Button} from "antd";
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

    const [addPost] = useMutation(ADD_POST);
    const [likePost] = useMutation(LIKE_POST);

    const {data, refetch, loading, error} = useQuery(GET_USER_POSTS, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {id: currentId}
    });

    const [newPost, setNewPost] = useState<string>('')


    const sendNewPost = async () => {
        const response = await addPost({
            variables: {
                userId: myId,
                name: name,
                lastName: lastName,
                avatar: avatar,
                content: newPost
            }
        });
        !data.getUserPosts && refetch()
        setNewPost('')
    }

    const sendLike = async (postId: string) => {
        console.log(postId)
        const response = await likePost({
            variables: {
                ownersId: currentId,
                postId: postId,
                userId: myId,
                name: name,
                lastName: lastName,
                // avatar: avatar,
            }
        })
    }

    return (
        <div className='posts'>
            <div className='posts__post-form'>
                <Input allowClear={true} value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
                <Button onClick={sendNewPost}>
                    Submit
                </Button>
            </div>
            <div className='posts_posts-list'>
                {data && data?.getUserPosts?.posts.map(({id, date, time, content, likes}: any) =>
                    <div key={id}>
                        {content}-----{date}-----{time}-----<HeartOutlined
                        onClick={() => sendLike(id)}/>----{likes.length}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPosts;
