import React, { FC, useState } from 'react';
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_POSTS } from "../../../GRAPHQL/queries/post-queries";
import { ADD_POST } from "../../../GRAPHQL/mutations/post-mutations";
import { UserReadFragment } from "../../../GRAPHQL/customs-fragments/user-fragments";
import { Input, Button } from "antd";
import './user-posts.less';


interface UserPostsProps {
    myId: string | undefined,
    currentId: string | undefined,
}

const UserPosts: FC<UserPostsProps> = ({myId, currentId}) => {

    const [addPost] = useMutation(ADD_POST);

    const {data, refetch, loading, error} = useQuery(GET_USER_POSTS, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {id: currentId}
    });

    const [newPost, setNewPost] = useState<string>('')


    const submitNewPost = async () => {
        const userData = UserReadFragment({
            id: myId,
            args: ['name', 'lastName', 'avatar']
        });
        const response = await addPost({
            variables: {
                userId: myId,
                name: userData.name,
                lastName: userData.lastName,
                avatar: userData.avatar,
                content: newPost
            }
        });
        !data.getUserPosts && refetch()
        setNewPost('')
    }

    return (
        <div className='posts'>
            <div className='posts__post-form'>
                <Input allowClear={true} value={newPost} onChange={(e) => setNewPost(e.target.value)}/>
                <Button onClick={submitNewPost}>
                    Submit
                </Button>
            </div>
            <div className='posts_posts-list'>
                {data && data?.getUserPosts?.posts.map(({id, date, time, content}: any) =>
                    <div key={id}>
                        {content}-----{date}-----{time}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPosts;
