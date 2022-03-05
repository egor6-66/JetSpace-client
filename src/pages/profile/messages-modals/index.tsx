import React, {FC} from 'react';
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";



const MessagesModal = () => {

    const navigate = useNavigate();

    return (
        <Modal title="Basic Modal"
               visible={true}
               onCancel={() =>  navigate(-1,)}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};

export default MessagesModal;