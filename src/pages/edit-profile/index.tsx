import React, {FC, useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {EDIT_PROFILE} from "../../GRAPHQL/mutations/user-mutations";
import {useTypedSelector} from "../../assets/hooks/useTypedSelector";
import {useActions} from "../../assets/hooks/useActions";
import {API_URL, themes} from "../../assets/constants";
import $axios from "../../services/axios-customs";
import {userParams, socialNetworksInputs, allObjs} from './nputs';
import ImgCrop from 'antd-img-crop';
import {Button, Form, Input, Select, Typography, Upload} from "antd";
import './edit-profile.less';
import {GET_USER} from "../../GRAPHQL/queries/user-queries";


interface EditProfileProps {
    myId: string | undefined,
}

const EditProfile: FC<EditProfileProps> = ({myId}) => {

    const {Title} = Typography;
    const {Option} = Select;

    const {id: currentId} = useParams();
    const navigate = useNavigate();
    const {setTheme} = useActions();

    const {user} = useTypedSelector(state => state.auth);
    const [img, setImg] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [editUserParams] = useMutation(EDIT_PROFILE);
    console.log(user)

    const handleChange = (theme: string) => setTheme(theme);

    const onFinish = async (allObjs: any) => {
        await editUserParams({
            variables: {
                id: myId,
                ...allObjs
            },
        });
        img && await $axios.post(`${API_URL}/imgUpload`, img, {
            headers: {"content-type": "multipart/form-data"}
        })
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            navigate(-1,)
        }, 2000)
    };

    const customRequest = async (file: any) => {
        const bodyFormData = new FormData();
        bodyFormData.append('headerAvatar', file);
        setImg(bodyFormData)
    };


    return (
        <div className='edit-profile'>
            {isLoading ?
                <div>loading</div>
                :
                <Form
                    className='edit-profile__form'
                    name="basic"
                    onFinish={onFinish}
                >
                    {userParams.map(({name, obj}) =>
                        <Form.Item key={name} label={name} name={obj}><Input placeholder={user[obj]? user[obj]:name}/></Form.Item>
                    )}
                    <Form.Item name="theme" label="Тема сайта">
                        <Select placeholder={'theme'} onChange={handleChange}>
                            {themes.map(theme =>
                                <Option key={theme} value={theme}>{theme}</Option>
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item className='edit-profile__form_header-avatar'>
                        <ImgCrop rotate={true} aspect={2 / 1} onModalOk={(file) => customRequest(file)}>
                            <Upload
                                name="avatar"
                                showUploadList={false}
                                customRequest={() => false}
                            >
                                <Title level={3}>изменить фото шапки</Title>
                            </Upload>
                        </ImgCrop>
                    </Form.Item>
                    {socialNetworksInputs.map(({obj}) =>
                        <Form.Item key={obj} label={obj} name={obj}
                                   rules={[{type: "url", message: "This field must be a valid url."}]}>
                            <Input placeholder={ user[obj]? user[obj] :`вставьте ссылку на ваш ${obj}`}/>
                        </Form.Item>
                    )}
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>}
        </div>
    );
};

export default EditProfile;
