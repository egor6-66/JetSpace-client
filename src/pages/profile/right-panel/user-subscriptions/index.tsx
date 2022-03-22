import React, {FC} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {Typography} from "antd";
import './user-subscriptions.less';


interface UserSubscriptionsProps{
    subscriptions: string[] | undefined
}

const UserSubscriptions:FC<UserSubscriptionsProps> = ({subscriptions}) => {

    const {Title} = Typography;

    const word = wordDeclension({
        length: subscriptions?.length || 0,
        word: subscriptions?.length && subscriptions?.length % 10 === 1 ?'подписка' : 'подпис' ,
        suffix: ['ки', 'ок'],
    })

    return (
        <div className='user-subscriptions'>
            {subscriptions?.length} {word}
        </div>
    );
};

export default UserSubscriptions;