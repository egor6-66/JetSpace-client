import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {useTypedSelector} from "./assets/hooks/useTypedSelector";
import {useActions} from "./assets/hooks/useActions";
import {choiceTheme} from "./assets/functions/choiceTheme";
import {getToken} from "./services/localStorage";

import Auth from "./pages/auth";
import Wrapper from "./components/wrapper";
import Profile from "./pages/profile";
import MessagesList from "./pages/profile/messages-list";
import MessagesModal from "./pages/profile/messages-modals";
import UserFriends from "./pages/profile/user-friends";
import UserMusic from "./pages/profile/user-musiс";
import UserReposts from "./pages/profile/user-reposts";
import AllUsers from "./pages/all-users";
import EditProfile from "./pages/edit-profile";

import './core-less/themes/light.less';
import './core-less/themes/dark.less';
import './core-less/themes/purple.less';


const App = () => {

    const {checkAuth} = useActions();

    const {isAuth, user} = useTypedSelector(state => state.auth);


    useEffect(() => {
        !!getToken() && checkAuth()
    }, [])

    useEffect(() => {
        choiceTheme(user.theme)
    }, [user.theme])

    return (
        isAuth && user.isActivated ?
            <Routes>
                <Route path="*" element={<Navigate to={`/user/${user.id}/profile`}/>}/>
                <Route path='user/:id' element={<Wrapper myId={user.id}/>}>
                    <Route path='profile' element={<Profile myId={user.id}/>}>
                        <Route path='messages' element={<MessagesList/>}/>
                        <Route path='message/:id' element={<MessagesModal myId={user.id}/>}/>
                        <Route path='friends' element={<UserFriends/>}/>
                        <Route path='music' element={<UserMusic/>}/>
                        <Route path='reposts' element={<UserReposts/>}/>
                    </Route>
                    <Route path='editProfile' element={<EditProfile myId={user.id}/>}/>
                    <Route path='allUsers' element={<AllUsers/>}/>
                </Route>
            </Routes>
            :
            <Routes>
                <Route path='/' element={<Auth/>}/>
            </Routes>
    );
};

export default App;

