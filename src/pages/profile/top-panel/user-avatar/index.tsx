import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import $axios from "../../../../services/axios-customs";
import {API_URL} from "../../../../constants";
import {getBase64} from "../../../../assets/functions/getBase64";
import {Input, Upload, Typography, Avatar} from "antd";
import './user-avatar.less';


interface UserAvatarProps {
    avatar: string | undefined | null,
    currentId: string | undefined,
}

const UserAvatar: FC<UserAvatarProps> = ({avatar, currentId}) => {

    const {Text} = Typography;
    const navigate = useNavigate();

    const [newAvatar, setNewAvatar] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [isVisibleImgMenu, setIsVisibleImgMenu] = useState<boolean>(false);


    const customRequest = async ({file}: any) => {
        try {
            setIsLoading(true)
            const imgUrl = await getBase64(file)
            const bodyFormData = new FormData();
            bodyFormData.append('avatar', file);
            const response = await $axios.post(`${API_URL}/fileUpload`, bodyFormData)
            setNewAvatar(imgUrl)
        } catch (e) {
            setError('Не удалось загрузить аватар')
        } finally {
            setIsLoading(false)
        }
    };

    const clickToAvatar = (e: any) => {
        e.stopPropagation()
        navigate(`allPhotos/${currentId}`)
    }

    return (
        <>
            <div className='user-avatar'
                 onMouseEnter={() => setIsVisibleImgMenu(true)}
                 onMouseLeave={() => setIsVisibleImgMenu(false)}
            >
                {isLoading ?
                    <div>loading...</div>
                    :
                    <div className='user-avatar__img'
                        onClick={(e) => clickToAvatar(e)}>
                        <Avatar
                            src={newAvatar ? newAvatar : avatar}
                            size={200}
                        />
                    </div>
                }
                <Upload
                    accept={'image/*'}
                    name="avatar"
                    headers={{"content-type": "multipart/form-data"}}
                    showUploadList={false}
                    customRequest={customRequest}
                >
                    {isVisibleImgMenu && <Text className='user-avatar__upload'>Изменить фото</Text>}
                </Upload>
            </div>
        </>
    );
};

export default UserAvatar;
