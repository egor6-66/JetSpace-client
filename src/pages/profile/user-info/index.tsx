import React, {FC, useState} from 'react';
import {EditOutlined} from "@ant-design/icons";
import {Button, Input, Modal} from "antd";
import {useMutation} from "react-apollo";
import {EDIT_USER_STATUS} from "../../../GRAPHQL/mutations";
import './user-info.less';

interface UserInfoProps {
    refetch: any,
    myId: string | undefined,
    currentId: string | undefined,
    isOnline: boolean | undefined,
    name: string,
    lastName: string,
    status: string,
}

const UserInfo: FC<UserInfoProps> = ({refetch, myId, currentId, isOnline, name, lastName, status}) => {

    const [editUserStatus] = useMutation(EDIT_USER_STATUS)

    const [isVisibleEditStatus, setIsVisibleEditStatus] = useState<boolean>(false);
    const [newStatus, setNewStatus] = useState<string>('');

    const submitEditStatus = () =>{
        editUserStatus({
            variables: {
                input:{
                    id: myId,
                    status: newStatus
                }
            },
        }).then((data) =>{
            refetch()
            setIsVisibleEditStatus(false)
        })
    }

    return (
        <div className='user-info'>
            <div>{isOnline && 'Online'}</div>
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
                <Input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)} style={{marginTop: '15px'}}/>
                <Button onClick={submitEditStatus}>
                    Сохранить
                </Button>
            </Modal>
        </div>
    );
};

export default UserInfo;