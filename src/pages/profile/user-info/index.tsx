import React, { FC, useState } from 'react';
import { useMutation } from "@apollo/client";
import { EDIT_STATUS } from "../../../GRAPHQL/mutations/user/user-mutations";
import { EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import './user-info.less';


interface UserInfoProps {
    myId: string | undefined,
    currentId: string | undefined,
    isOnline: boolean | undefined,
    name: string,
    lastName: string,
    status: string,
}

const UserInfo: FC<UserInfoProps> = ({myId, currentId, isOnline, name, lastName, status}) => {

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

    return (
        <div className='user-info'>
            <div>{isOnline ? 'Online' : 'Offline'}</div>
            <div>{name} </div>
            <div>{lastName}</div>
            <div>{status ? status : myId === currentId && 'Установить статус'}
                {myId === currentId && <EditOutlined style={{cursor: "pointer"}}
                                                     onClick={() => setIsVisibleEditStatus(true)}/>}
            </div>
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
