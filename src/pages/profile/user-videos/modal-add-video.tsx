import React, {FC} from 'react';
import {Button, Form, Input, Modal} from "antd";
import patterns from "../../../assets/patterns";


interface ModalAddVideoProps {
    isVisibleModalAddVideo: boolean,
    closedModal: any,
    form: any,
    onFinish: any
}
// https://www.youtube.com/results?search_query=crystal+castles+empathy
// crystal castles-empathy
const ModalAddVideo: FC<ModalAddVideoProps> = ({isVisibleModalAddVideo,closedModal,onFinish, form}) => {


    return (
        <Modal
            title={'Добавить новое видео'}
            visible={isVisibleModalAddVideo}
            footer={false}
            onCancel={closedModal}
        >
            <Form name="basic" onFinish={onFinish} form={form}>
                <Form.Item
                    name="path"
                    rules={[{pattern: patterns.youTube, message: "Не корректная ссылка"}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{required: true, max: 40, message: 'Укажите название ролика'}]}
                >
                    <Input/>
                </Form.Item>
                <div style={{display: "flex", justifyContent: "center", gap: 15}}>
                    <Form.Item>
                        <Button onClick={closedModal}>
                            отмена
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            сохранить
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </Modal>
    );
};

export default ModalAddVideo;