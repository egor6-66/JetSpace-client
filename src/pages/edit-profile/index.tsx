import React, { FC } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { EDIT_PROFILE } from "../../GRAPHQL/mutations/user-mutations";
import {useTypedSelector} from "../../assets/hooks/useTypedSelector";
import { Button, Form, Input, Select} from "antd";
import {useActions} from "../../assets/hooks/useActions";


interface EditProfileProps {
    myId: string | undefined,
}

const EditProfile: FC<EditProfileProps> = ({myId}) => {

    const {id: currentId} = useParams();
    const navigate = useNavigate();
    const {setTheme} = useActions();

    const { Option } = Select;

    const {isAuth, user} = useTypedSelector(state => state.auth);

    const [editUserParams] = useMutation(EDIT_PROFILE);

    function handleChange(theme: string) {
        setTheme(theme)
    }

    const onFinish = async ({newName, newLastName, theme}: any) => {
        await editUserParams({
            variables: {
                id: myId,
                name: newName,
                lastName: newLastName,
                theme: theme,
            },
        });
        navigate(-1)
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
                    <Input placeholder={user.name}/>
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="newLastName"
                >
                    <Input placeholder={user.lastName}/>
                </Form.Item>
                <Form.Item name="theme" label="Тема сайта">
                    <Select placeholder={user.theme} style={{ width: 120 , color: "red"}} onChange={handleChange}>
                        <Option value="light">light</Option>
                        <Option value="dark">dark</Option>
                    </Select>
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
