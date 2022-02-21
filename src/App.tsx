import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "./assets/hooks/useTypedSelector";
import {Routes, Route, Navigate} from "react-router-dom";
import {getToken} from "./services/cookies-customs";
import {useActions} from "./assets/hooks/useActions";

import Wrapper from "./components/wrapper";
import Profile from "./pages/profile";
import Auth from "./pages/auth";
import MyFriends from "./pages/my-friends";
import AllUsers from "./pages/all-users";
import EditProfile from "./pages/profile/edit-profile";


const App = () => {

    const {isAuth, user, loading, error} = useTypedSelector(state => state.auth);

    const {checkAuth} = useActions();

    useEffect(() => {
        !!getToken() && checkAuth()
    }, [])

    return (
        isAuth && user.isActivated ?
            <Routes>
                <Route path="*" element={<Navigate to={`/user/${user.id}/profile`}/>}/>
                <Route path='user/:id' element={<Wrapper myId={user.id}/>}>
                    <Route path='profile' element={<Profile myId={user.id}/>}/>
                    <Route path='editProfile' element={<EditProfile myId={user.id}/>}/>
                    <Route path='myFriends' element={<MyFriends/>}/>
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
