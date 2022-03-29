import React from 'react';
import {LogoProjectIcon} from '../../assets/icons'
import {Swiper, SwiperSlide} from "swiper/react";
import {projectInfoList} from "./list";
import {Parallax, Pagination, Navigation} from "swiper";
import {Typography} from "antd";
import {motion} from "framer-motion";
import './project-info.less';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const ProjectInfo = () => {

    const {Title, Text} = Typography;

    return (
        <motion.div className='project-info'
                    initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
        >
            <Swiper
                // style={{
                //     "--swiper-navigation-color": "#fff",
                //     "--swiper-pagination-color": "#fff",
                // }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="project-info__swiper"

            >
                <div
                    slot="container-start"
                    className='project-info__swiper_parallax-bg'
                    data-swiper-parallax="-23%"
                />
                {projectInfoList().map((item: any) =>
                    <SwiperSlide key={item.id}>
                        <div className='project-info__swiper_item'>
                            <Title>
                                {item.title}
                            </Title>
                            <Text>
                                {item.content}
                            </Text>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </motion.div>
    );
};

export default ProjectInfo;