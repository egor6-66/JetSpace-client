import React, {FC} from 'react';
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";


interface AudioCallModalModalProps {
    myId: string | undefined,
    colors: any,
}


const AudioCallModal: FC<AudioCallModalModalProps> = ({myId, colors}) => {

    const navigate = useNavigate();

    return (
        <Modal visible={true}
               onCancel={() => navigate(-1)}
        >
            AudioCallModal
        </Modal>
    );
};

export default AudioCallModal;