import React, { FC, Dispatch, SetStateAction } from 'react';
import { useNavigate } from "react-router-dom";
import { formRules } from "../../../../assets/rules/form";
import { useActions } from "../../../../store/actions";
import { loginUser } from "../../../../store/auth/actions";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";


interface LoginForm {
    setCurrentForm: Dispatch<SetStateAction<string | null>>
}

interface Onfinish {
    email: string,
    password: string
    remember: boolean,
}

const LoginForm: FC<LoginForm> = (props) => {

    const {
        setCurrentForm,
    } = props;

    const {loginUser} = useActions();
    const navigate = useNavigate();

    const onFinish = async ({email, password, remember}: Onfinish) => {
        const userId = await loginUser({email, password})
        // !!userId && navigate(`/theme:${userId}`)
    };

    return (
        <>
            <Form
                className='form'
                layout="vertical"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    hasFeedback
                    rules={[{
                        type: 'email', required: true,
                        ...formRules({
                            required: true,
                            message: 'Заполните поле!',
                            validator: {type: 'length', length: 2},
                            name: "email"
                        })
                    }]}
                >
                    <Input suffix={<UserOutlined/>}/>
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    hasFeedback
                    rules={formRules({
                        required: true,
                        message: 'Заполните поле!',
                        validator: {type: 'length', length: 7},
                        name: "password"
                    })}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
                <div className='form__set-current-form'
                     onClick={() => setCurrentForm('register')}>
                    Зарегистрироваться
                </div>
            </Form>
        </>
    );
};

export default LoginForm;
