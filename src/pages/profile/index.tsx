import React, { FC } from 'react';
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../GRAPHQL/queries/user-queries";
import UserInfo from "./user-info";
import UserAvatar from "./user-avatar";
import UserPosts from "./user-posts";
import './profile.less';


interface ProfileProps {
    myId: string | undefined,
}

const Profile: FC<ProfileProps> = ({myId}) => {

    const {id: currentId} = useParams();

    const {data, refetch, loading, error} = useQuery(GET_USER, {
        fetchPolicy: `${myId === currentId? 'cache-first' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {id: currentId}
    });

    //
    // useEffect(() => {
    //     userRefetch()
    // },[currentId])

    return (
        <div className='profile'>
            <div className='left-block'>
                <UserAvatar
                    avatar={data?.getUser.avatar}
                    currentId={currentId}
                />
                {myId === currentId &&
                <div className='edit-profile'>
                    <Link to={`/user/${myId}/editProfile`}>Редактировать профиль</Link>
                </div>}
            </div>
            <div className='right-block'>
                <UserInfo
                    myId={myId}
                    currentId={currentId}
                    isOnline={data?.getUser.isOnline}
                    name={data?.getUser.name}
                    lastName={data?.getUser.lastName}
                    status={data?.getUser.status}
                />
                <UserPosts
                    myId={myId}
                    currentId={currentId}
                />
            </div>
        </div>
    );
};

export default Profile;
