import React, {FC, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_DIALOGS} from "../../../GRAPHQL/queries/dialogs-queries";
import {Typography, Avatar} from 'antd'
import './dialogs-list.less';


interface DialogsListProps {
    myId: string | undefined
}

const DialogsList: FC<DialogsListProps> = ({myId}) => {

    const {Title} = Typography;

    const [getAllDialogs, {loading, data}] = useLazyQuery(GET_ALL_DIALOGS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: myId,
        }
    });

    useEffect(() => {
        getAllDialogs()
    }, [])

    return (
        <div className='dialogs-list'>
            {data && data?.getAllDialogs?.dialogs.map(({userName, userLastName, userAvatar, userId}: any) =>
                <div key={userId} className='dialogs-list__item'>
                    <div className='dialogs-list__item_left-block'>
                        <Avatar src={userAvatar} size={90}/>
                        <Title level={3}>{userName} <br/> {userLastName}</Title>
                    </div>
                    <div className='dialogs-list__item_right-block'>
                        <NavLink to={`/user/${myId}/profile/message/${userId}`}>
                            перейти к диалогу
                        </NavLink>
                        <NavLink to={`/user/${userId}/profile`}>
                            перейти на страницу пользователя
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DialogsList;