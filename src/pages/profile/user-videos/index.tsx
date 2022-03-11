import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useLazyQuery, useMutation} from "@apollo/client";
import {ADD_VIDEO} from "../../../GRAPHQL/mutations/video-mutations";
import {GET_ALL_USER_VIDEOS} from "../../../GRAPHQL/queries/videos-queries";
import {ReactPlayerCustoms} from "../../../components/react-player-customs";
import ModalAddVideo from "./modal-add-video";
import {Button, Form, Typography} from "antd";
import './user-videos.less';



interface UserVideosProps {
    myId: string | undefined,
}

const UserVideos: FC<UserVideosProps> = ({myId}) => {

    const {id: currentId} = useParams();
    const {Title} = Typography;
    const [form] = Form.useForm();

    const [isVisibleModalAddVideo, setIsVisibleModalAddVideo] = useState(false)

    const [addVideo] = useMutation(ADD_VIDEO);

    const [getAllUserVideo, {loading, data}] = useLazyQuery(GET_ALL_USER_VIDEOS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    useEffect(() => {
        getAllUserVideo()
    }, [])

    const closedModal = () => {
        setIsVisibleModalAddVideo(false)
        form.resetFields()
    }

    const onFinish = async ({path, name}: any) => {
        await addVideo({
            variables: {
                id: myId,
                path,
                name,
            },
        });
        if(!data?.getAllUserVideos) {
            console.log('wdwdwd')
            getAllUserVideo()
        }
        closedModal()
    }

    return (
        <>
            <ModalAddVideo
                isVisibleModalAddVideo={isVisibleModalAddVideo}
                closedModal={closedModal}
                onFinish={onFinish}
                form={form}
            />
            <div className='user-videos'>
                <Button onClick={() => setIsVisibleModalAddVideo(true)}>добавить видео</Button>
                <div className='user-videos__list'>
                    {data && data?.getAllUserVideos?.videos.map((video: any) =>
                        <div key={video.id} className='video'>
                            <div className='video__player'>
                                <ReactPlayerCustoms
                                    width={300}
                                    height={200}
                                    url={video.path}
                                />
                            </div>
                            <Title level={4} className='video__name'>
                                {video.name}
                            </Title>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserVideos;