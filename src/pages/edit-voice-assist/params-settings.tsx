import React from 'react';
import {StatusIcons} from '../../assets/icons';
import {Form, Input, Button, Switch} from 'antd'

const ParamsSettings = ({onFinishParamsSettings, isActivated, setActiveVoiceAssist}: any) => {


    return (
        <div>
            <p>Здесь вы можете настроить параметры звукового помощника.</p>
            <Form
                name="basic"
                onFinish={onFinishParamsSettings}
            >
                <Form.Item label="состояние" valuePropName="checked" name="isActive" >
                    <Switch defaultChecked={isActivated}
                            onChange={() => setActiveVoiceAssist(!isActivated)}
                            checkedChildren={<StatusIcons id='success' />}
                            unCheckedChildren={<StatusIcons id='disabled' />}
                    />
                </Form.Item>
                <Form.Item label="Имя" name="name">
                    <Input placeholder='Имя по которому вы будите обращаться к помощнику.'/>
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

export default ParamsSettings;