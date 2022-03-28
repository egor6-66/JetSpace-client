import React, {FC, useState} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {Avatar, Button, Modal, Typography} from "antd";
import './user-subscribers.less';
import {GET_ALL_SUBSCRIBERS} from "../../../../GRAPHQL/queries/followers-queries";
import {useLazyQuery} from "@apollo/client";
import {motion} from "framer-motion";
import {UseAnimate} from "../../../../assets/hooks";
import moment from "moment";
import {useNavigate} from "react-router-dom";



interface UserSubscribersProps {
    subscribers: string[] | undefined,
    currentId: string | undefined,
    myId:string | undefined,
}

const UserSubscribers:FC<UserSubscribersProps> = ({subscribers, currentId, myId}) => {

    const {Title, Text} = Typography;
    const navigate = useNavigate();

    const [isVisibleShowAllSubscribers, setIsVisibleShowAllSubscribers] = useState<boolean>(false);

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
        setIsVisibleShowAllSubscribers(true)
        getAllSubscribers()
    };

    const closed = () => {
        setIsVisibleShowAllSubscribers(false)
    };
    console.log(currentId)
    const goToUserPage = (id: string) => {
        setIsVisibleShowAllSubscribers(false)
        navigate(`/user/${id}/profile/posts`)
    };

    const goToUserDialog = (id: string) => {
        navigate(`/user/${currentId}/profile/message/${id}`)
    };

    return (
        <>
        <div className='user-subscribers'
             onClick={clickOnAllSubscribers}
        >
            {subscribers?.length} {word}

        </div>
            <Modal
                destroyOnClose={true}
                title={<Title style={{textAlign: "center"}} level={2}>{subscribers?.length || 0} {word}</Title>}
                bodyStyle={{display: "flex", flexDirection: "column", gap: '20px'}}
                footer={[<Button key="close" onClick={closed}>закрыть</Button>]}
                visible={isVisibleShowAllSubscribers}
                onCancel={closed}
            >
                {data?.getAllSubscribers?.map((subscribers: any, index: number) =>
                    <motion.div key={subscribers.id} className='user-subscribers-item'
                                custom={index}
                                initial='hidden'
                                animate="visible"
                                variants={UseAnimate('arrayIteration', index)}
                    >
                        <div className='user-subscribers-item__left-block'>
                            <Text>{moment.unix(subscribers.dateSub).calendar()}, {currentId === myId?
                                'на вас подписался' : `${subscribers.userName} 
                                ${subscribers.userLastName ? subscribers.userLastName : ''} подписался на`}</Text>
                            <Avatar size={70} src={subscribers.userAvatar}/>
                            <Title level={4}> {subscribers.userName} {subscribers.userLastName}</Title>
                        </div>
                        <div className='user-subscribers-item__right-block'>
                            <Button onClick={() => goToUserPage(subscribers.userId)}>перейти на страницу</Button>
                            <Button onClick={() => goToUserDialog(subscribers.userId)}>перейти на диалогам</Button>
                        </div>
                    </motion.div>
                )}
            </Modal>
        </>
    );
};

export default UserSubscribers;