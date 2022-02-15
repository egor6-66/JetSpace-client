import React, {useEffect} from 'react';
import {useTypedSelector} from "./assets/hooks/useTypedSelector";
import {Routes, Route} from "react-router-dom";

import Auth from "./pages/auth";
import Wrapper from "./components/wrapper";
import MyProfile from "./pages/my-profile";

import MyFriends from "./pages/my-friends";
import {getToken} from "./services/cookies-customs";
import {useActions} from "./assets/hooks/useActions";


const App = () => {

    const {isAuth ,user, loading, error} = useTypedSelector(state => state.auth);

    const {checkAuth} = useActions();

    useEffect(() => {
        !!getToken() && checkAuth()
    },[])

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
