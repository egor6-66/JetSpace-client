import React, { Dispatch, FC, SetStateAction } from 'react';
import { useActions } from '../../../../assets/hooks/useActions'
import { formRules, validateMessages } from "../../../../assets/rules/form";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';


interface RegisterForm {
    setCurrentForm: Dispatch<SetStateAction<string | null>>,
}

interface Onfinish {
    name: string,
    email: string,
    password: string
    remember: boolean,
}

const RegisterForm: FC<RegisterForm> = (props) => {

    const {
        setCurrentForm,
    } = props;

    const {registerUser} = useActions();

    const onFinish = async ({name, email, password, remember}: Onfinish) => {
       const success = await registerUser({name, email, password})
       !!success && setCurrentForm('register success')
    }

    return (
        <>
            <Form
                validateMessages={validateMessages}
                className='form'
                layout="vertical"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Имя"
                    name="name"
                    hasFeedback
                    rules={formRules({
                        required: true,
                        message: 'Заполните поле!',
                        validator: {type: 'length', length: 2},
                        name: "name"
                    })}
                >
                    <Input suffix={<UserOutlined/>}/>
                </Form.Item>
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
                <Form.Item
                    label="Повторите пароль"
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={formRules({
                        required: true,
                        message: 'Заполните поле!',
                        validator: {type: 'confirm', length: 7},
                        name: "confirm"
                    })}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Регистрация
                    </Button>
                </Form.Item>
                <div className='form__set-current-form'
                     onClick={() => setCurrentForm('login')}>
                    Авторизироваться
                </div>
            </Form>
        </>
    );
};

export default RegisterForm;
