import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useLazyQuery, useMutation} from "@apollo/client";
import {GET_ALL_USER_IMG} from "../../../../GRAPHQL/queries/img-queries";
import {EDIT_AVATAR} from "../../../../GRAPHQL/mutations/user-mutations";
import {REMOVE_PHOTO} from "../../../../GRAPHQL/mutations/images-mutations";
import {UseGetContainerWidth, UseGetContainerHeight} from '../../../../assets/hooks'
import {LikeIcon, AvatarIcon, DeleteIcon} from "../../../../assets/icons";
import {ICurrentUser} from "../../../../models/current-user";
import moment from "moment";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Avatar, Modal, Popover,notification, Typography} from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './all-photos.less';



interface AllPhotosProps {
    myId: string | undefined,
    colors: any,
    currentUser: ICurrentUser,
}

const AllPhotos: FC<AllPhotosProps> = ({myId, colors, currentUser}) => {

    const {id: currentId} = useParams();
    const navigate = useNavigate();
    const {Title, Text} = Typography

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [editAvatar] = useMutation(EDIT_AVATAR);
    const [removePhoto] = useMutation(REMOVE_PHOTO);

    const [getAllUserImg, {loading, data}] = useLazyQuery(GET_ALL_USER_IMG, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    useEffect(() => {
        getAllUserImg()
    }, [])

    const width = UseGetContainerWidth(120, 1280, 900);
    const height = UseGetContainerHeight(360, 990, 600);

    const getSlidesPerView = () => width / 220;

    const onSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex)
    };

    const clickAvatarIcon = async () => {
      const response = await editAvatar({
            variables: {
                id: myId,
                avatar: data?.getAllUserImg?.images[activeIndex]?.path
            }
        })
        notification["success"]({
            message: 'Аватар изменен',
            description: <Avatar size={50} src={response.data.editAvatar.avatar}/>
        })
    };

    const clickDeleteIcon = async () => {
        activeIndex !== 0? setActiveIndex(activeIndex - 1) : setActiveIndex(0)
        const response = await removePhoto({
            variables: {
                id: myId,
                photoId: data?.getAllUserImg?.images[activeIndex]?.id
            }
        })
        notification["success"]({
            message: 'Фото удалено',
        })
    };

    return (
        <Modal
            centered={true}
            title={<Title style={{textAlign: "center"}}>фото</Title>}
            visible={true}
            onCancel={() => navigate(-1,)}
            width={width}
            bodyStyle={{height: height, display: "flex"}}
            footer={
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    initialSlide={activeIndex}
                    observeSlideChildren={true}
                    slidesPerView={getSlidesPerView()}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {data && data?.getAllUserImg?.images.map(({id, path}: any) =>
                        <SwiperSlide key={id}>
                            <Avatar size={200} shape="square" src={path}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        >
            <Swiper
                spaceBetween={10}
                navigation={true}
                initialSlide={activeIndex}
                observeSlideChildren={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                onSlideChange={swiper => onSlideChange(swiper)}
            >
                {data && data?.getAllUserImg?.images.map(({id, path}: any) =>
                    <SwiperSlide key={id}>
                        <img style={{height: height - 12}} src={path} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
            {data?.getAllUserImg?.images.length &&
            <div className='photo-info-block' style={{border: `2px solid ${colors?.border?.active}`}}>
                <div className='photo-info-block__header' style={{borderBottom: `2px solid ${colors?.border?.active}`}}>
                    <div className='photo-info-block__header_left-block'>
                        <Avatar size={40} src={currentUser.avatar}/>
                    </div>
                    <div className='photo-info-block__header_right-block'>
                        <Title level={3}>{currentUser.name} {currentUser.lastName}</Title>
                        <Text>{moment.unix(data?.getAllUserImg?.images[activeIndex].date).calendar()}</Text>
                    </div>
                </div>
                <div className='photo-info-block__icon-block' style={{borderBottom: `2px solid ${colors?.border?.active}`}}>
                    <div><LikeIcon colors={colors}/></div>
                    {currentUser?.id === myId && currentUser?.avatar !== data?.getAllUserImg?.images[activeIndex]?.path ?
                    <Popover content={<Text>поставить на аватар</Text>}>
                        <div onClick={clickAvatarIcon}><AvatarIcon colors={colors}/></div>
                    </Popover>
                    :
                        <Text style={{color: colors?.text?.active}}>аватар профиля</Text>
                    }
                    {currentUser?.id === myId && currentUser?.avatar !== data?.getAllUserImg?.images[activeIndex]?.path &&
                    <Popover content={<Text>удалить</Text>}>
                        <div  onClick={clickDeleteIcon}><DeleteIcon colors={colors}/></div>
                    </Popover>}
                </div>
                <div className='photo-info-block__comments-block' style={{borderBottom: `1px solid ${colors?.border?.active}`}}>
                    efefef
                </div>
            </div>}
        </Modal>
    );
};

export default AllPhotos;
