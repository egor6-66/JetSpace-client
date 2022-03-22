import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {useTypedSelector} from "./store";
import {useActions} from "./store/actions";
import {getToken} from "./services/cookies";
import {UseGeolocation, UseSpeech, UseTheme} from './assets/hooks'
import {themes} from './constants'

import Auth from "./pages/auth";
import Wrapper from "./components/layout/wrapper";
import Profile from "./pages/profile";
import DialogsList from "./pages/profile/left-panel/dialogs-list";
import MessagesModal from "./pages/profile/left-panel/messages-modals";
import UserFriends from "./pages/profile/left-panel/user-friends";
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


const App = () => {

    const {checkAuth} = useActions();
    const geoLock = UseGeolocation()

    const {isAuth} = useTypedSelector(state => state.auth);
    const user = useTypedSelector(state => state.user);

    useEffect(() => {
        !!getToken() && checkAuth()
    }, [])

    UseTheme(user.theme, themes, user.theme)

    return (
        isAuth && user.isActivated ?
            <>
                <Routes>
                    <Route path="*" element={<Navigate to={`/user/${user.id}/profile`}/>}/>
                    <Route path='user/:id' element={<Wrapper myId={user.id}/>}>
                        <Route path='profile' element={<Profile myId={user.id}/>}>
                            <Route path='messages' element={<DialogsList myId={user.id}/>}/>
                            <Route path='message/:userId' element={<MessagesModal myId={user.id}/>}/>
                            <Route path='videos' element={<UserVideos myId={user.id}/>}/>
                            <Route path='reposts' element={<UserReposts/>}/>
                            <Route path='news' element={<UserFriends/>}/>
                            <Route path='allPhotos/:userId' element={<AllPhotos/>}/>
                        </Route>
                        <Route path='editProfile' element={<EditProfile myId={user.id}/>}/>
                        <Route path='allUsers' element={<AllUsers/>}/>
                        <Route path='donations' element={<Donations/>}/>
                        <Route path='projectInfo' element={<ProjectInfo/>}/>
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

