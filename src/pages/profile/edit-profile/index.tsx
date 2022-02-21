import React, {FC, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-apollo";
import {EDIT_USER} from "../../../GRAPHQL/mutations";
import {GET_USER} from "../../../GRAPHQL/queries";
import {Button, Form, Input} from "antd";

interface EditProfileProps{
    myId: string | undefined,
}

const EditProfile:FC<EditProfileProps> = ({myId}) => {

    const {id: currentId} = useParams();
    const navigate = useNavigate();

    const {data, refetch, loading, error} = useQuery(GET_USER, {variables: {id: currentId}});
    const [editUser] = useMutation(EDIT_USER)

    console.log(data)
    const submitEditUser =  (newName: string, newLastName:string) => {
        editUser({
            variables: {
                input:{
                    id: myId,
                    name: !!newName ? newName : data.getUser.name,
                    lastName: !!newLastName ? newLastName : data.getUser.lastName,
                }
            },
        }).then(async(data) =>{

            await refetch()
            navigate(`/user/${myId}/profile`)
        })
    };

    const onFinish = ({newName, newLastName}:any) => {
        if (newName || newLastName){
            submitEditUser(newName, newLastName)
        }
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Имя"
                    name="newName"
                >
                    <Input placeholder={data?.getUser.name} />
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="newLastName"
                >
                    <Input placeholder={data?.getUser.lastName}/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProfile;