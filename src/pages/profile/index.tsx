import React, {FC, useState} from 'react';
import {Outlet, useParams, useLocation} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../GRAPHQL/queries/user-queries";
import {UseTextColor} from '../../assets/hooks'
import UserInfo from "./top-panel/user-info";
import UserPosts from "./left-panel/user-posts";
import NavMenu from "./left-panel/nav-menu";
import SocialsNetworks from "./right-panel/socials-networts";
import profileMenuItems from "./list";
import {motion, AnimateSharedLayout} from "framer-motion";
import './profile.less';
import ActiveLineMenu from "../../components/active-line-menu";
import RightPanelMenu from "./right-panel/menu";


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
    console.log('+data?.getUser.likeCounter',+data?.getUser.likeCounter)

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
                subscribers={data?.getUser.subscribers}
                subscriptions={data?.getUser.subscriptions}
            />
            <div className='profile__content-wrapper'>
                <NavMenu myId={myId} currentId={currentId}/>
                <div className='profile__content'>
                    <div className='profile__content_left-block'>
                        {location.length === 4
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
                    <div className='profile__content_right-panel'>
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
                        <RightPanelMenu
                            likeCounter={+data?.getUser.likeCounter}
                            currentId={currentId}
                            subscribers={data?.getUser.subscribers}
                            subscriptions={data?.getUser.subscriptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
