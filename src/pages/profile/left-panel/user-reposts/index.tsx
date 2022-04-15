import React, {FC} from 'react';
import Spinner2 from "../../../../components/spinners/spinner-2";
import './user-repost.less';
import {Typography} from "antd";

interface UserRepostsProps {
    myId: string | undefined,
    colors: any,
}

const UserReposts: FC<UserRepostsProps> = ({myId, colors}) => {

    const {Title} = Typography;

    return (
        <div className='user-repost'>
            <Title style={{color: colors?.text?.active, textAlign: "center", lineHeight: '150px'}}>Функционал в разработке</Title>
            <div className='user-repost__spin'>
                <Spinner2 size={380}/>
            </div>
        </div>
    );
};

export default UserReposts;