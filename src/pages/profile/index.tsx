import React, {FC, useEffect, useState} from 'react';
import {Outlet, useParams, useLocation} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../GRAPHQL/queries/user-queries";
import UserInfo from "./user-info";
import UserPosts from "./user-posts";
import NavMenu from "./nav-menu";
import SocialsNetworks from "./socials-networts";
import AllLikes from "./all-likes";
import AllDislikes from "./all-dislikes";
import './profile.less';


interface ProfileProps {
    myId: string | undefined,
}

const Profile: FC<ProfileProps> = ({myId}) => {

    const {id: currentId} = useParams();
    const location = useLocation().pathname.split('/');

    const {data, loading, error, subscribeToMore} = useQuery(GET_USER, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {userId: currentId}
    });

    return (
        <div className='profile'>
            <UserInfo
                myId={myId}
                currentId={currentId}
                isOnline={data?.getUser.isOnline}
                name={data?.getUser.name}
                lastName={data?.getUser.lastName}
                status={data?.getUser.status}
                avatar={data?.getUser.avatar}
                headerAvatar={data?.getUser.headerAvatar}
            />
            <div className='profile__content-wrapper'>
                <NavMenu myId={myId} currentId={currentId}/>
                <div className='profile__content'>
                    <div className='profile__content_left-block'>
                        {location.length !== 5
                        &&
                        <UserPosts
                            myId={myId}
                            currentId={currentId}
                            name={data?.getUser.name}
                            lastName={data?.getUser.lastName}
                            avatar={data?.getUser.avatar}
                        />}
                        <Outlet/>
                    </div>
                    <div className='profile__content_right-block'>
                        <SocialsNetworks
                            instagram={data?.getUser.instagram}
                            facebook={data?.getUser.facebook}
                            twitter={data?.getUser.twitter}
                            spotify={data?.getUser.spotify}
                            telegram={data?.getUser.telegram}
                            github={data?.getUser.github}
                            soundCloud={data?.getUser.soundCloud}
                            youTube={data?.getUser.youTube}
                        />
                        <AllLikes
                            likeCounter={+data?.getUser.likeCounter}
                            currentId={currentId}
                        />
                        <AllDislikes/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
