import React, {FC, useState} from 'react';
import $axios from "../../../../services/axios-customs";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_USER_IMG} from "../../../../GRAPHQL/queries/img-queries";
import {API_URL} from "../../../../assets/constants";
import {getBase64} from "../../../../assets/functions/getBase64";
import AllPhotos from "./all-photos";
import {Input, Upload, Typography} from "antd";
import './user-avatar.less';


interface UserAvatarProps {
    avatar: string | undefined | null,
    currentId: string | undefined,
}

const UserAvatar: FC<UserAvatarProps> = ({avatar, currentId}) => {

    const {Text} = Typography;

    const [getAllUserImg, {loading, data}] = useLazyQuery(GET_ALL_USER_IMG, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    const [newAvatar, setNewAvatar] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [isVisibleImgMenu, setIsVisibleImgMenu] = useState<boolean>(false);
    const [isVisibleAllPhotos, setIsVisibleAllPhotos] = useState<boolean>(false);

    const customRequest = async ({file}: any) => {
        try {
            setIsLoading(true)
            const imgUrl = await getBase64(file)
            const bodyFormData = new FormData();
            bodyFormData.append('image', file);
            const response = await $axios.post(`${API_URL}/imgUpload`, bodyFormData)
            setNewAvatar(imgUrl)
        } catch (e) {
            setError('Не удалось загрузить аватар')
        } finally {
            setIsLoading(false)
        }
    };

    const clickToAvatar = (e: any) => {
        e.stopPropagation()
        getAllUserImg()
        setIsVisibleAllPhotos(true)
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
                    <img onClick={(e) => clickToAvatar(e)}
                         className='user-avatar__img'
                         src={newAvatar ? newAvatar : avatar}
                    />
                }
                <Upload
                    name="avatar"
                    headers={{"content-type": "multipart/form-data"}}
                    showUploadList={false}
                    customRequest={customRequest}
                >
                    {isVisibleImgMenu && <Text className='user-avatar__upload'>Изменить фото</Text>}
                </Upload>
                {isVisibleAllPhotos &&
                <AllPhotos
                    allUserImg={data?.getAllUserImg?.images}
                    isVisibleAllPhotos={isVisibleAllPhotos}
                    setIsVisibleAllPhotos={setIsVisibleAllPhotos}
                />}
            </div>
        </>
    );
};

export default UserAvatar;
