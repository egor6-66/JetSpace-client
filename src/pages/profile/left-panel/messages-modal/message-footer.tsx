import React, {FC} from 'react';
import {Avatar, Typography} from "antd";


interface MessageFooterProps {
    data: any
}

const MessageFooter:FC<MessageFooterProps> = ({data}) => {

    const {Title} = Typography;

    return (
        <div className='messages-modal__footer'>
            <Avatar size={60} src={data?.getMessages?.userAvatar}/>
            <Title>{data?.getMessages?.userName} {data?.getMessages?.userLastName}</Title>
        </div>
    );
};

export default MessageFooter;
