import React, {FC, useState} from 'react';
import {Input, Upload} from "antd";
import $axios from "../../../services/axios-customs";
import {API_URL} from "../../../constants";
import {getBase64} from "../../../assets/functions/getBase64";
import AllPhotos from "./all-photos";
import {useQuery, useLazyQuery} from "react-apollo";
import {GET_USER} from "../../../GRAPHQL/queries";


interface UserAvatarProps {
    currentId: string | undefined,
    images: any,
}

const UserAvatar: FC<UserAvatarProps> = ({currentId, images}) => {

    const [avatar, setAvatar] = useState<any>(null);
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
            await $axios.post(`${API_URL}/imgUpload`, bodyFormData)
            setAvatar(imgUrl)
        } catch (e) {
            setError('Не удалось загрузить аватар')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {isVisibleAllPhotos &&
            <AllPhotos
                isVisibleAllPhotos={isVisibleAllPhotos}
                setIsVisibleAllPhotos={setIsVisibleAllPhotos}
                allImages={images}
            />}

            <div className='left-block__avatar'
                 onMouseEnter={() => setIsVisibleImgMenu(true)}
                 onMouseLeave={() => setIsVisibleImgMenu(false)}
            >
                {isLoading ?
                    <div>loading...</div>
                    :
                    <img onClick={(e) => setIsVisibleAllPhotos(true)}
                    style={{width: '150px'}} src={avatar ? avatar :  images?.images[0].path} alt=""/>
                }
                <Upload
                    name="avatar"
                    headers={{"content-type": "multipart/form-data"}}
                    showUploadList={false}
                    customRequest={customRequest}
                >
                    {isVisibleImgMenu && <div>Выбрать фото</div>}
                </Upload>
            </div>
        </>
    );
};

export default UserAvatar;