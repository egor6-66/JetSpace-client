import React, {FC} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {Typography} from "antd";
import './user-subscribers.less';


interface UserSubscribersProps {
    subscribers: string[] | undefined,
}

const UserSubscribers:FC<UserSubscribersProps> = ({subscribers}) => {

    const {Title} = Typography;

    const word = wordDeclension({
        length: subscribers?.length || 0,
        word: 'подписчик',
        suffix: ['a', 'ов'],
    })

    return (
        <div className='user-subscribers'>
            {subscribers?.length} {word}
        </div>
    );
};

export default UserSubscribers;