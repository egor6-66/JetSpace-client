import React, { FC, useState } from 'react';
import $axios from "../../../services/axios-customs";
import { useLazyQuery } from "@apollo/client";
import { UserWriteFragment } from "../../../GRAPHQL/customs-fragments/user-fragments";
import { GET_ALL_USER_IMG } from "../../../GRAPHQL/queries/img-queries";
import { API_URL } from "../../../assets/constants";
import { getBase64 } from "../../../assets/functions/getBase64";
import AllPhotos from "./all-photos";
import { Upload } from "antd";


interface UserAvatarProps {
    avatar: string | undefined | null,
    currentId: string | undefined,
}

const UserAvatar: FC<UserAvatarProps> = ({avatar, currentId}) => {

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
            console.log(response)
            UserWriteFragment({
                id: currentId,
                args: {
                    avatar: response?.data.path
                }
            })
            setNewAvatar(imgUrl)
        } catch (e) {
            setError('Не удалось загрузить аватар')
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <>
            {isVisibleAllPhotos &&
            <AllPhotos
                allUserImg={data?.getAllUserImg?.images}
                isVisibleAllPhotos={isVisibleAllPhotos}
                setIsVisibleAllPhotos={setIsVisibleAllPhotos}
            />}

            <div className='left-block__avatar'
                 onMouseEnter={() => setIsVisibleImgMenu(true)}
                 onMouseLeave={() => setIsVisibleImgMenu(false)}
            >
                {isLoading ?
                    <div>loading...</div>
                    :
                    <img onClick={(e) => {
                        getAllUserImg()
                        setIsVisibleAllPhotos(true)
                    }}
                         style={{width: '150px'}} src={newAvatar ? newAvatar : avatar} alt=""/>
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
