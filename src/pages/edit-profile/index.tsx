import React, {FC, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {EDIT_PROFILE} from "../../GRAPHQL/mutations/user-mutations";
import {useTypedSelector} from "../../assets/hooks/useTypedSelector";
import {useActions} from "../../assets/hooks/useActions";
import {API_URL, themes} from "../../assets/constants";
import $axios from "../../services/axios-customs";
import ImgCrop from 'antd-img-crop';
import {Button, Form, Input, Select, Typography, Upload} from "antd";



interface EditProfileProps {
    myId: string | undefined,
}

const EditProfile: FC<EditProfileProps> = ({myId}) => {

    const {Text} = Typography;
    const {Option} = Select;

    const {id: currentId} = useParams();
    const navigate = useNavigate();
    const {setTheme} = useActions();

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

    const customRequest = async (file: any) => {
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('headerAvatar', file);

            await $axios.post(`${API_URL}/imgUpload`, bodyFormData, {
                headers:{"content-type": "multipart/form-data"}
            })
        } catch (e) {
            console.log(e)
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
                    <Input placeholder={user.name}/>
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="newLastName"
                >
                    <Input placeholder={user.lastName}/>
                </Form.Item>
                <Form.Item name="theme" label="Тема сайта">
                    <Select placeholder={user.theme} style={{width: 120, color: "red"}} onChange={handleChange}>
                        {themes.map(theme =>
                            <Option key={theme} value={theme}>{theme}</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <ImgCrop rotate={true} aspect={2/1} onModalOk={(file) =>customRequest(file)}>
                        <Upload
                            name="avatar"
                            showUploadList={false}
                            customRequest={() => false}
                        >
                            <Text className='user-avatar__upload'>Изменить фото</Text>
                        </Upload>
                    </ImgCrop>
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
