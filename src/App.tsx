import React from 'react';
import {useTypedSelector} from "./assets/hooks/useTypedSelector";
import {Routes, Route} from "react-router-dom";

import Auth from "./pages/auth";
import Wrapper from "./components/wrapper";
import MyProfile from "./pages/my-profile";

import MyFriends from "./pages/my-friends";


const App = () => {

    const {user, loading, error} = useTypedSelector(state => state.auth);

    return (
        <>
            <Routes>
                <Route path='/' element={<Auth/>}/>
                <Route path='user:id' element={<Wrapper/>}>
                    <Route path='myProfile' element={<MyProfile/>}/>
                    <Route path='myFriends' element={<MyFriends/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
