import React, {FC, useState} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {Typography} from "antd";
import './user-subscribers.less';
import {GET_ALL_SUBSCRIBERS} from "../../../../GRAPHQL/queries/followers-queries";
import {useLazyQuery} from "@apollo/client";



interface UserSubscribersProps {
    subscribers: string[] | undefined,
    currentId: string | undefined,
}

const UserSubscribers:FC<UserSubscribersProps> = ({subscribers, currentId}) => {

    const {Title} = Typography;

    const [isShowAllSubscribers, setIsShowAllSubscribers] = useState<boolean>(false);

    const [getAllSubscribers, {loading, data}] = useLazyQuery(GET_ALL_SUBSCRIBERS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });
    const word = wordDeclension({
        length: subscribers?.length || 0,
        word: 'подписчик',
        suffix: ['a', 'ов'],
    });

    const clickOnAllSubscribers = () => {
        setIsShowAllSubscribers(true)
        getAllSubscribers()
    }

    return (
        <div className='user-subscribers'
             onClick={clickOnAllSubscribers}
        >
            {subscribers?.length} {word}
        </div>
    );
};

export default UserSubscribers;