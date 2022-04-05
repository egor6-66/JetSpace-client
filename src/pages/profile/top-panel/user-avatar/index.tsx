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
    refetch: any,
}

const UserAvatar: FC<UserAvatarProps> = ({avatar, currentId, refetch}) => {

    const {Text} = Typography;
    const navigate = useNavigate();

    const [error, setError] = useState<string>('');
    const [isVisibleImgMenu, setIsVisibleImgMenu] = useState<boolean>(false);

    const customRequest = async ({file}: any) => {
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('avatar', file);
            await $axios.post(`${API_URL}/fileUpload`, bodyFormData)
            setTimeout(() => refetch(), 600)
        } catch (e) {
            setError('Не удалось загрузить аватар')
        }
    };

    const clickToAvatar = (e: any) => {
        e.stopPropagation()
        navigate(`allPhotos/${currentId}`)
    };

    return (
        <>
            <div className='user-avatar'
                 onMouseEnter={() => setIsVisibleImgMenu(true)}
                 onMouseLeave={() => setIsVisibleImgMenu(false)}
            >
                <div className='user-avatar__img'
                     onClick={(e) => clickToAvatar(e)}>
                    <Avatar
                        src={avatar}
                        size={200}
                    />
                </div>
                <Upload
                    accept={'image/*'}
                    name="avatar"
                    headers={{"content-type": "multipart/form-data"}}
                    showUploadList={false}
                    customRequest={customRequest}
                >
                    {isVisibleImgMenu && <Text className='user-avatar__upload'>Изменить аватар</Text>}
                </Upload>
            </div>
        </>
    );
};

export default UserAvatar;
