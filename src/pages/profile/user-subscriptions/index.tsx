import React from 'react';
import wordDeclension from "../../../assets/functions/word-declension";
import {Typography} from "antd";
import './user-subscriptions.less';


const UserSubscriptions = () => {

    const {Title} = Typography;

    const count = 1001
    console.log(count % 10)
    const word = wordDeclension({
        length: count,
        word: count % 10 === 1 ?'подписка' : 'подпис',
        suffix: ['ки', 'ок'],
    })

    return (
        <div className='user-subscriptions'>
            <Title level={2}>{count} {word}</Title>
        </div>
    );
};

export default UserSubscriptions;