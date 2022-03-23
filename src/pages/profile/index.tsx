import React, {FC, useEffect} from 'react';
import {Outlet, useParams, useLocation} from "react-router-dom";
import {useActions} from "../../store/actions";
import {useQuery} from "@apollo/client";
import {GET_USER} from "../../GRAPHQL/queries/user-queries";
import UserInfo from "./top-panel/user-info";
import RightPanelMenu from "./right-panel/menu";
import NavMenu from "./left-panel/nav-menu";
import SocialsNetworks from "./right-panel/socials-networts";
import './profile.less';


interface ProfileProps {
    myId: string | undefined,
}

const Profile: FC<ProfileProps> = ({myId}) => {

    const {getUser} = useActions();
    const {id: currentId} = useParams();
    const location = useLocation().pathname.split('/');

    const {data, loading, error, subscribeToMore} = useQuery(GET_USER, {
        fetchPolicy: `${myId === currentId ? 'cache-and-network' : 'network-only'}`,
        nextFetchPolicy: 'cache-only',
        variables: {userId: currentId}
    });

    useEffect(() => {
        getUser(data?.getUser)
    }, [data, currentId])

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
                            currentId={currentId}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
