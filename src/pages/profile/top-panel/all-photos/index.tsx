import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_USER_IMG} from "../../../../GRAPHQL/queries/img-queries";
import {UseGetContainerWidth, UseGetContainerHeight} from '../../../../assets/hooks'
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Modal, Typography} from "antd";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './all-photos.less';


interface AllPhotosProps {
    myId: string | undefined,
    colors: any,
}

const AllPhotos:FC<AllPhotosProps> = ({myId, colors}) => {

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

    const width = UseGetContainerWidth(120, 1280, 900)
    const height = UseGetContainerHeight(360, 990, 600)

    const getSlidesPerView = () => width / 220

    return (
        <Modal
            centered={true}
            title={<Title>фото</Title>}
            visible={true}
            onCancel={() => navigate(-1,)}
            width={width}
            bodyStyle={{height: height, overflowY: "scroll"}}
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
                            <img style={{width: '200px'}} src={path} alt=""/>
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
                        <img style={{height: height - 12}} src={path} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </Modal>
    );
};

export default AllPhotos;
