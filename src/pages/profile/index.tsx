import React, {FC, useEffect, useState,} from 'react';
import {useParams, Link} from "react-router-dom";
import UserInfo from "./user-info";
import UserAvatar from "./user-avatar";
import {useQuery} from "react-apollo";
import {GET_USER} from "../../GRAPHQL/queries";
import './profile.less';


interface ProfileProps {
    myId: string | undefined,
}

const Profile: FC<ProfileProps> = ({myId}) => {

    const {id: currentId} = useParams();

    const {data, refetch, loading, error} = useQuery(GET_USER, {variables: {id: currentId}});


    // useEffect(() => {
    //     refetch()
    // }, []);

    return (
        <div className='profile'>
            <div className='left-block'>
                <UserAvatar myId={myId}/>
                {myId === currentId &&
                <div className='edit-profile'>
                    <Link to={`/user/${myId}/editProfile`}>Редактировать профиль</Link>
                </div>}
            </div>
            <div className='right-block'>
                <UserInfo
                    refetch={refetch}
                    myId={myId}
                    currentId={currentId}
                    isOnline={data?.getUser.isOnline}
                    name={data?.getUser.name}
                    lastName={data?.getUser.lastName}
                    status={data?.getUser.status}
                />
            </div>
        </div>
    );
};

export default Profile;
