import React from 'react';
import {Button, Form, Input, Switch} from "antd";
import {StatusIcons} from "../../assets/icons";

const ResponseSettings = ({onFinishResponseSettings}: any) => {
    return (
        <div>
            <p>Здесь вы можете настроить параметры ответов звукового помощника.</p>
            <Form
                name="response"
                onFinish={onFinishResponseSettings}
            >
                <Form.Item label="ответ 1" name="response">
                    <Input placeholder='Как будет отвечать пощник на ваш просьбы.'/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        сохранить
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default ResponseSettings;