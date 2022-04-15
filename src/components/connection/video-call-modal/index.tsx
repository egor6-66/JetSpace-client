import React, {FC} from 'react';
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";


interface VideoCallModalProps {
    myId: string | undefined,
    colors: any,
}

const VideoCallModal: FC<VideoCallModalProps> = ({myId, colors}) => {

    const navigate = useNavigate();

    return (
        <Modal visible={true}
               onCancel={() => navigate(-1)}
        >
            VideoCallModal
        </Modal>
    );
};

export default VideoCallModal;