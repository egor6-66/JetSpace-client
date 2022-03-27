import React, {FC, useState} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {Avatar, Button, Modal, Typography} from "antd";
import './user-subscriptions.less';
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_SUBSCRIBERS, GET_ALL_SUBSCRIPTIONS} from "../../../../GRAPHQL/queries/followers-queries";
import {motion} from "framer-motion";
import {UseAnimate} from "../../../../assets/hooks";
import moment from "moment";


interface UserSubscriptionsProps {
    subscriptions: string[] | undefined
    currentId: string | undefined
}

const UserSubscriptions: FC<UserSubscriptionsProps> = ({subscriptions, currentId}) => {

    const {Title, Text} = Typography;

    const [isShowAllSubscriptions, setIsShowAllSubscriptions] = useState<boolean>(false);

    const [getAllSubscriptions, {loading, data}] = useLazyQuery(GET_ALL_SUBSCRIPTIONS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });


    const word = wordDeclension({
        length: subscriptions?.length || 0,
        word: subscriptions?.length && subscriptions?.length % 10 === 1 ? 'подписка' : 'подпис',
        suffix: ['ки', 'ок'],
    });
    console.log(data)
    const clickOnAllSubscriptions = () => {
        setIsShowAllSubscriptions(true)
        getAllSubscriptions()
    };

    const closed = () => {
        setIsShowAllSubscriptions(false)
    };


    return (
        <>
            <div className='user-subscriptions'
                 onClick={clickOnAllSubscriptions}
            >
                {subscriptions?.length} {word}
            </div>
            <Modal
                destroyOnClose={true}
                className='all-likes-modal'
                title={<Title style={{textAlign: "center"}} level={2}>{subscriptions?.length || 0} {word}</Title>}
                bodyStyle={{display: "flex", flexDirection: "column", gap: '20px'}}
                footer={[<Button key="close" onClick={closed}>закрыть</Button>]}
                visible={isShowAllSubscriptions}
                onCancel={closed}
            >
                {data?.getAllSubscriptions.map((subscription: any, index: number) =>
                    <motion.div key={subscription.id} className='all-likes-modal__item'
                                custom={index}
                                initial='hidden'
                                animate="visible"
                                variants={UseAnimate('arrayIteration', index)}
                    >
                        <div className='all-likes-modal__item_left-block'>
                            <Avatar size={70} src={subscription.userAvatar}/>
                        </div>
                        <div className='right-block'>
                            <Title level={4}>{subscription.userName} {subscription.userLastName}</Title>
                        </div>
                    </motion.div>
                )}
            </Modal>
        </>
    );
};

export default UserSubscriptions;