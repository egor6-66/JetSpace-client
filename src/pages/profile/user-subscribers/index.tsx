import React from 'react';
import wordDeclension from "../../../assets/functions/word-declension";
import {Typography} from "antd";
import './user-subscribers.less';


const UserSubscribers = () => {

    const {Title} = Typography;

    const word = wordDeclension({
        length: 5,
        word: 'подписчик',
        suffix: ['a', 'ов'],
    })

    return (
        <div className='user-subscribers'>
            <Title level={2}>5 {word}</Title>
        </div>
    );
};

export default UserSubscribers;