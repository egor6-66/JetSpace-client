import React, {useEffect} from 'react';
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import {useTypedSelector} from "./store";
import {useActions} from "./store/actions";
import {getToken} from "./services/cookies";
import {UseColor, UseGeolocation, UseSpeech, UseTheme} from './assets/hooks'
import {VoiceAssistRoutes} from './voice-assistant'

import {themes} from './constants'

import Auth from "./pages/auth";
import Wrapper from "./components/layout/wrapper";
import Profile from "./pages/profile";
import UserPosts from "./pages/profile/left-panel/user-posts";
import DialogsList from "./pages/profile/left-panel/dialogs-list";
import MessagesModal from "./components/connection/messages-modal";
import UserNews from "./pages/profile/left-panel/user-news";
import UserVideos from "./pages/profile/left-panel/user-videos";
import UserReposts from "./pages/profile/left-panel/user-reposts";
import AllUsers from "./pages/all-users";
import EditProfile from "./pages/edit-profile";
import AllPhotos from "./pages/profile/top-panel/all-photos";
import Donations from "./pages/donations";
import ProjectInfo from "./pages/project-info";


import './core-less/themes/light.less';
import './core-less/themes/dark.less';
import './core-less/themes/purple.less';
import EditVoiceAssist from "./pages/edit-voice-assist";
import {useSpeech} from "react-use";
import {Button} from "antd";
import UserSound from "./pages/profile/left-panel/user-sounds";
import {AnimatePresence} from "framer-motion";
import UseIdle from "./assets/hooks/useIdle";
import {useMutation} from "@apollo/client";
import {EDIT_ONLINE} from "./GRAPHQL/mutations/user-mutations";
import VideoCallModal from "./components/connection/video-call-modal";
import AudioCallModal from "./components/connection/audio-call-modal";


const App = () => {

    const {checkAuth} = useActions();

    const [editOnline] = useMutation(EDIT_ONLINE);

    const {isAuth} = useTypedSelector(state => state.auth);
    const user = useTypedSelector(state => state.user);
    const currentUser = useTypedSelector(state => state.currentUser);
    const {isActivated} = useTypedSelector(state => state.voiceAssist);

    const location = useLocation()
    const isUserActivity = UseIdle(0.2 * 60000)
    const geoLock = UseGeolocation();
    const colors = UseColor();
    UseTheme(user.theme, themes, user.theme);
    VoiceAssistRoutes(isActivated);

    useEffect(() => {
        !!getToken() && checkAuth()
    }, []);

    useEffect(() => {
        user.id &&
        editOnline({
            variables: {
                id: user?.id,
                isOnline: isUserActivity,
            }
        })
    }, [isUserActivity]);


    return (
        isAuth && user.isActivated ?
            <>
                <Routes>
                    <Route path="*" element={<Navigate to={`/user/${user.id}/profile/posts`}/>}/>
                    <Route path='user/:id' element={<Wrapper myId={user.id}/>}>
                        <Route path='profile' element={<Profile myId={user.id} colors={colors}/>}>
                            <Route path='posts' element={<UserPosts myId={user.id} colors={colors}/>}/>
                            <Route path='messages' element={<DialogsList myId={user.id} colors={colors}/>}/>
                            <Route path='message/:userId' element={<MessagesModal myId={user.id} colors={colors}/>}/>
                            <Route path='videoCall/:userId' element={<VideoCallModal myId={user.id} colors={colors}/>}/>
                            <Route path='audioCall/:userId' element={<AudioCallModal myId={user.id} colors={colors}/>}/>
                            <Route path='videos' element={<UserVideos myId={user.id} colors={colors}/>}/>
                            <Route path='reposts' element={<UserReposts myId={user.id} colors={colors}/>}/>
                            <Route path='news' element={<UserNews myId={user.id} colors={colors}/>}/>
                            <Route path='allPhotos/:userId' element={<AllPhotos currentUser={currentUser} myId={user.id} colors={colors}/>}/>
                        </Route>
                        <Route path='editProfile' element={<EditProfile myId={user.id}/>}/>
                        <Route path='allUsers' element={<AllUsers myId={user.id} colors={colors}/>}/>
                        <Route path='donations' element={<Donations/>}/>
                        <Route path='projectInfo' element={<ProjectInfo/>}/>
                        <Route path='editVoiceAssist' element={<EditVoiceAssist/>}/>
                    </Route>
                </Routes>
            </>
            :
            <Routes>
                <Route path='/' element={<Auth/>}/>
            </Routes>
    );
};

export default App;

