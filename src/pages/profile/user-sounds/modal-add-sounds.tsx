import React, {FC, useCallback, useEffect, useState} from 'react';
import patterns from "../../../assets/patterns";
import {QuestionIcon} from '../../../assets/icons'
import {Button, Form, Input, Modal, Typography} from "antd";
import {addPlayList, addSoundTrack} from "../../../constants";


interface ModalAddVideoProps {
    isVisibleModalAddSound: boolean,
    closedModal: any,
    onFinish: any,
}


const ModalAddSounds: FC<ModalAddVideoProps> = ({isVisibleModalAddSound, closedModal, onFinish}) => {

    const {Title} = Typography;
    const [form] = Form.useForm();

    const [isTypeModal, setIsTypeModal] = useState<string>('')

    useEffect(() => {
        isTypeModal && form.resetFields()
    }, [isTypeModal, closedModal])

    const title = isTypeModal === 'soundTrack' ? 'добавить трэк' : 'добавить плэйлист'
    const placeholder = isTypeModal === 'soundTrack' ?
        'вставьте ссылку на трек из soundCloud' : 'вставьте ссылку на плэйлист из soundCloud'
    const img = isTypeModal === 'soundTracks' ? addSoundTrack : addPlayList

    return (
        <>
            <Modal
                visible={isVisibleModalAddSound}
                footer={false}
                onCancel={closedModal}
                centered={true}
                bodyStyle={{display: "flex", justifyContent: "center", gap: 15}}
            >
                <Button onClick={() => setIsTypeModal('soundTracks')}>добавить трэк</Button>
                <Button onClick={() => setIsTypeModal('playLists')}>добавить плэйлист</Button>
            </Modal>
            {isTypeModal &&
            <Modal
                title={<Title level={3} style={{textAlign: "center"}}>{title}</Title>}
                visible={isVisibleModalAddSound}
                footer={false}
                onCancel={() => setIsTypeModal('')}
                centered={true}
            >
                <Form name="basic" onFinish={onFinish} form={form}>
                    <Form.Item
                        name={isTypeModal}
                        rules={[{pattern: patterns.soundCloud, message: "Не корректная ссылка"}]}
                    >
                        <Input placeholder={placeholder} allowClear={true} suffix={<QuestionIcon img={img}/>}/>
                    </Form.Item>
                    <div style={{display: "flex", justifyContent: "center", gap: 15}}>
                        <Form.Item>
                            <Button onClick={() => setIsTypeModal('')}>
                                отмена
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" >
                                сохранить
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </Modal>
            }
        </>
    );
};

export default ModalAddSounds;