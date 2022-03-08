import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_USER_IMG} from "../../../GRAPHQL/queries/img-queries";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Modal, Typography} from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './all-photos.less';
import {getHeight, getWidth} from "../../../assets/functions/get-area";


const AllPhotos = () => {

    const {id: currentId} = useParams();
    const navigate = useNavigate();
    const {Title} = Typography

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const [getAllUserImg, {loading, data}] = useLazyQuery(GET_ALL_USER_IMG, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    useEffect(() => {
        getAllUserImg()
    }, [])

    const getSlidesPerView = () => {
      return   getWidth(450) / 220
    }

    return (
        <Modal
            centered={true}
            title={<Title>фото</Title>}
            visible={true}
            onCancel={() => navigate(-1,)}
            width={getWidth(450)}
            bodyStyle={{height: getHeight(450)}}
            footer={
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={getSlidesPerView()}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {data && data?.getAllUserImg?.images.map(({id, path}: any) =>
                        <SwiperSlide key={id}>
                            <img style={{width:'200px'}} src={path} alt=""/>
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        >
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {data && data?.getAllUserImg?.images.map(({id, path}: any) =>
                    <SwiperSlide key={id}>
                        <img style={{height: getHeight(500)}} src={path} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>

        </Modal>
    );
};

export default AllPhotos;
