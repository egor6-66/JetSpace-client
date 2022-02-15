import React from 'react';
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {getUser} from "../../store/auth/actions";


const MyProfile = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <Button onClick={() => dispatch(getUser())}>get</Button>
        </div>
    );
};

export default MyProfile;