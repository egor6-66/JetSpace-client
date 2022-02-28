import React, {FC, useState} from 'react';
import {useMutation} from "@apollo/client";
import {EDIT_STATUS} from "../../../GRAPHQL/mutations/user-mutations";
import UserAvatar from "./user-avatar";
import {Button, Input, Modal, Typography} from "antd";
import './user-info.less';


interface UserInfoProps {
    myId: string | undefined,
    currentId: string | undefined,
    isOnline: boolean | undefined,
    name: string,
    lastName: string,
    status: string,
    avatar: string
}

const UserInfo: FC<UserInfoProps> = ({myId, currentId, isOnline, name, lastName, status, avatar}) => {

    const {Title,} = Typography;

    const [editStatus, {loading, error}] = useMutation(EDIT_STATUS)

    const [isVisibleEditStatus, setIsVisibleEditStatus] = useState<boolean>(false);
    const [newStatus, setNewStatus] = useState<string>('');

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

    const clickStatus = () => {
        myId === currentId && setIsVisibleEditStatus(true)
    }

    return (
        <div className='user-info' style={{backgroundImage: `url(${avatar})`}}>
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
