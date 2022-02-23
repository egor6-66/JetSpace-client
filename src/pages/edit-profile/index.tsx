import React, { FC } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { EDIT_PROFILE } from "../../GRAPHQL/mutations/user/user-mutations";
import { UserReadFragment } from "../../GRAPHQL/customs-fragments/user-fragments";
import { Button, Form, Input } from "antd";


interface EditProfileProps {
    myId: string | undefined,
}

const EditProfile: FC<EditProfileProps> = ({myId}) => {

    const {id: currentId} = useParams();
    const navigate = useNavigate();

    const [editUserParams] = useMutation(EDIT_PROFILE);

    const data = UserReadFragment({
        id: currentId,
        args: ['name', 'lastName']
    });

    const submitNewUserParams = async (newName: string, newLastName: string) => {
        await editUserParams({
            variables: {
                id: myId,
                name: newName,
                lastName: newLastName,
            },
        });
        navigate(`/user/${myId}/profile`)
    };

    const onFinish = async ({newName, newLastName}: any) => {
        if (newName || newLastName) {
            await submitNewUserParams(newName, newLastName)
        }
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Имя"
                    name="newName"
                >
                    <Input placeholder={data ? data.name : ''}/>
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="newLastName"
                >
                    <Input placeholder={data ? data.lastName : ''}/>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditProfile;
