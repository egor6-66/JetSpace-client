import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {useTypedSelector} from "./assets/hooks/useTypedSelector";
import {useActions} from "./assets/hooks/useActions";
import {getToken} from "./services/localStorage";

import Auth from "./pages/auth";
import Wrapper from "./components/wrapper";
import Profile from "./pages/profile";
import UserFriends from "./pages/profile/user-friends";
import UserMusic from "./pages/profile/user-musiс";
import UserReposts from "./pages/profile/user-reposts";
import AllUsers from "./pages/all-users";
import EditProfile from "./pages/edit-profile";

import './core-less/themes/light.less';
import './core-less/themes/dark.less';


const App = () => {

    const {checkAuth} = useActions();

    const {isAuth, user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        !!getToken() && checkAuth()
    }, [])


  useEffect(() => {
      if (user.theme === 'light') {
          document.body.classList.remove('darkTheme');
          document.body.classList.add('lightTheme');
      }
      if (user.theme === 'dark') {
          document.body.classList.remove('lightTheme');
          document.body.classList.add('darkTheme');
      }
  },[user.theme])


    return (
        isAuth && user.isActivated ?
                <Routes>
                    <Route path="*" element={<Navigate to={`/user/${user.id}/profile`}/>}/>
                    <Route path='user/:id' element={<Wrapper myId={user.id}/>}>
                        <Route path='profile' element={<Profile myId={user.id}/>}>
                            <Route path='music' element={<UserMusic/>}/>
                            <Route path='reposts' element={<UserReposts/>}/>
                            <Route path='friends' element={<UserFriends/>}/>
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
