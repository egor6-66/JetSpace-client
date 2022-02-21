import React, {FC, useState} from 'react';
import {EditOutlined} from "@ant-design/icons";
import {Button, Input, Modal} from "antd";
import {useApolloClient, useMutation, useQuery} from "react-apollo";
import {EDIT_STATUS} from "../../../GRAPHQL/mutations";
import './user-info.less';
import {GET_USER} from "../../../GRAPHQL/queries";
import {cache} from "browserslist";
import {gql} from "apollo-boost";


interface UserInfoProps {
    myId: string | undefined,
    currentId: string | undefined,
    isOnline: boolean | undefined,
    name: string,
    lastName: string,
    status: string,
}

const UserInfo: FC<UserInfoProps> = ({myId, currentId, isOnline, name, lastName, status}) => {
    const client = useApolloClient()

    const [editStatus, {data, loading, error}] = useMutation(EDIT_STATUS)


    const [isVisibleEditStatus, setIsVisibleEditStatus] = useState<boolean>(false);
    const [newStatus, setNewStatus] = useState<string>('');

    const submitNewStatus = () => {
        editStatus({
            variables: {
                id: myId,
                status: newStatus,
            },
        }).then((data) => {
            client.writeFragment({
                id: `User:${currentId}`,
                fragment: gql`
                    fragment user on User {
                        status
                    }
                `,
                data: {
                    __typename: 'User',
                    status: data?.data.editStatus.status
                }
            })
            setIsVisibleEditStatus(false)
            setNewStatus(data?.data.editStatus.status)
        })
    }

    return (
        <div className='user-info'>
            <div>{isOnline ? 'Online' : 'Offline'}</div>
            <div>{name} </div>
            <div>{lastName}</div>
            <div>{status  ? status : myId === currentId && 'Установить статус'}
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