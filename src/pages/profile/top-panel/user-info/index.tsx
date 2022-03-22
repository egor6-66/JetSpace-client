import React, {FC, useEffect, useState} from 'react';
import {useMutation} from "@apollo/client";
import {EDIT_STATUS} from "../../../../GRAPHQL/mutations/user-mutations";
import UserAvatar from "../user-avatar";
import {SubscriptionsIcons} from '../../../../assets/icons';
import {motion} from "framer-motion";
import {Button, Input, Modal, Typography} from "antd";
import './user-info.less';
import {animationVariant1} from "./animation";
import {FOLLOW, UNFOLLOW} from "../../../../GRAPHQL/mutations/follow-mutations";
import {UseTextColor} from "../../../../assets/hooks";


interface UserInfoProps {
    myId: string | undefined,
    currentId: string | undefined,
    isOnline: boolean | undefined,
    name: string | undefined,
    lastName: string | undefined,
    status: string | undefined,
    avatar: string | undefined,
    headerAvatar: string | undefined,
    subscribers: any[],
    subscriptions: any[],
}

const UserInfo: FC<UserInfoProps> = ({myId, currentId, isOnline, name, lastName, status, avatar, headerAvatar, subscribers, subscriptions}) => {

    const {Title,} = Typography;
    const color = UseTextColor()

    const [editStatus, {loading, error}] = useMutation(EDIT_STATUS)
    const [follow] = useMutation(FOLLOW)
    const [unfollow] = useMutation(UNFOLLOW)

    const [isVisibleEditStatus, setIsVisibleEditStatus] = useState<boolean>(false);
    const [newStatus, setNewStatus] = useState<string>('');
    const [isFollow, setIsFollow] = useState<boolean>(false)

    useEffect(() => {
        subscribers && currentId && setIsFollow(subscribers.includes(myId))
    }, [subscribers, currentId])

    const submitNewStatus = async () => {
        await editStatus({
            variables: {
                id: myId,
                status: newStatus,
            },
        })
        setIsVisibleEditStatus(false)
        setNewStatus('')
    };

    const clickFollowBtn = () => {
        const dataFollow = {
            variables: {
                myId: myId,
                userId: currentId
            }
        }
        isFollow ? unfollow(dataFollow) : follow(dataFollow)
    };

    const clickStatus = () => {
        myId === currentId && setIsVisibleEditStatus(true)
    };
    console.log('isFollow',isFollow)
    return (
        <div className='user-info' style={{backgroundImage: `url(${headerAvatar})`}}>
            <UserAvatar
                avatar={avatar}
                currentId={currentId}
            />
            <div className='user-info__params'>
                <Title level={1}>
                    {name} {lastName}
                </Title>
                <div className='user-info__params_status'>
                    <Title level={2} onClick={clickStatus}>
                        {status ? status : myId === currentId && 'Установить статус'}
                    </Title>
                </div>
            </div>
            <Title level={3} className='user-info__isOnline'>
                {isOnline ? 'Online' : 'Offline'}
            </Title>
            {myId !== currentId && <motion.div className='user-info__follow-btn'
                                               onClick={clickFollowBtn}
                                               variants={animationVariant1}
                                               initial='visible'
                                               animate='hidden'
                                               whileTap='click'
            >
                <div className='user-info__follow-btn_title'
                style={{color: color.active}}
                >
                    {isFollow ? 'отписаться' : 'подписаться'}
                </div>

                {<SubscriptionsIcons id={isFollow ? 'unfollow' : 'follow'}/>}
            </motion.div>}
            <Modal
                visible={isVisibleEditStatus}
                onCancel={() => setIsVisibleEditStatus(false)}
                footer={false}
            >
                <Input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}
                       style={{marginTop: '15px'}}/>
                <Button onClick={submitNewStatus}>
                    Сохранить
                </Button>
            </Modal>
        </div>
    );
};

export default UserInfo;
