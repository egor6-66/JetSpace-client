import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import wordDeclension from "../../../../assets/functions/word-declension";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_SUBSCRIPTIONS} from "../../../../GRAPHQL/queries/followers-queries";
import {UseAnimate, UseGetContainerHeight} from "../../../../assets/hooks";
import moment from "moment";
import {Avatar, Button, Modal, Typography} from "antd";
import {motion} from "framer-motion";
import './user-subscriptions.less';


interface UserSubscriptionsProps {
    subscriptions: string[] | undefined
    currentId: string | undefined
    myId: string | undefined,
    colors: any
}

const UserSubscriptions: FC<UserSubscriptionsProps> = ({subscriptions, currentId, myId, colors}) => {

    const {Title, Text} = Typography;
    const navigate = useNavigate();
    const height = UseGetContainerHeight(360, 990, 600)
    const [isVisibleShowAllSubscriptions, setIsVisibleShowAllSubscriptions] = useState<boolean>(false);

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

    const clickOnAllSubscriptions = () => {
        setIsVisibleShowAllSubscriptions(true)
        getAllSubscriptions()
    };

    const closed = () => {
        setIsVisibleShowAllSubscriptions(false)
    };

    const goToUserPage = (id: string) => {
        setIsVisibleShowAllSubscriptions(false)
        navigate(`/user/${id}/profile/posts`)
    };

    const goToUserDialog = (id: string) => {
        navigate(`/user/${currentId}/profile/message/${id}`)
    };

    return (
        <>
            <div className='user-subscriptions'
                 onClick={clickOnAllSubscriptions}
                 style={{borderBottom: `2px solid ${colors?.border?.active}`}}
            >
                {subscriptions?.length} {word}
            </div>
            <Modal
                destroyOnClose={true}
                title={<Title style={{textAlign: "center"}} level={2}>{subscriptions?.length || 0} {word}</Title>}
                bodyStyle={{display: "flex", flexDirection: "column", gap: '20px', height:height, overflowY: "scroll"}}
                footer={[<Button key="close" onClick={closed}>закрыть</Button>]}
                visible={isVisibleShowAllSubscriptions}
                onCancel={closed}
            >
                {data?.getAllSubscriptions?.map((subscription: any, index: number) =>
                    <motion.div key={subscription.id} className='user-subscriptions-item'
                                custom={index}
                                initial='hidden'
                                animate="visible"
                                variants={UseAnimate('arrayIteration')}
                    >
                        <div className='user-subscriptions-item__left-block'>
                            <Text>{moment.unix(subscription.dateSub).calendar()}, {currentId === myId?
                            'вы подписались на' : `${subscription.userName} ${subscription.userName} подписался на`}</Text>
                            <Avatar size={70} src={subscription.userAvatar}/>
                            <Title level={4}> {subscription.userName} {subscription.userLastName}</Title>
                        </div>
                        <div className='user-subscriptions-item__right-block'>
                            <Button onClick={() => goToUserPage(subscription.userId)}>перейти на страницу</Button>
                            <Button onClick={() => goToUserDialog(subscription.userId)}>перейти на диалогам</Button>
                        </div>
                    </motion.div>
                )}
            </Modal>
        </>
    );
};

export default UserSubscriptions;