import React, {FC} from 'react';
import Spinner1 from "../../../../components/spinners/spinner-1";
import {Typography} from "antd";
import './user-news.less';


interface UserNewsProps {
    myId: string | undefined
    colors: any,
}

const UserNews: FC<UserNewsProps> = ({myId, colors}) => {

    const {Title} = Typography;

    return (
        <div className='user-news'>
            <Title style={{color: colors?.text?.active, textAlign: "center", lineHeight: '150px'}}>Функционал в разработке</Title>
            <Spinner1 size={230}/>
        </div>
    );
};

export default UserNews;