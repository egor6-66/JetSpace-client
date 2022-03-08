import React, {FC, useEffect} from 'react';
import './dialogs-list.less';
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_DIALOGS} from "../../../GRAPHQL/queries/dialogs-queries";
import {NavLink} from "react-router-dom";


interface DialogsListProps {
    myId: string | undefined
}


const DialogsList:FC<DialogsListProps> = ({myId}) => {

    const [getAllDialogs, {loading, data}] = useLazyQuery(GET_ALL_DIALOGS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: myId,
        }
    });

    useEffect(() => {
        getAllDialogs()
    },[])

    return (
        <div>
            {data && data?.getAllDialogs?.dialogs.map(({userName, userLastName, userAvatar, userId} :any) =>
            <div key={userId}>
                {userName}{userLastName}
                <NavLink to={`/user/${myId}/profile/message/${userId}`}>
                    перейти к диалогу
                </NavLink>
                <NavLink to={`/user/${userId}/profile`}>
                    перейти на страницу пользователя
                </NavLink>
            </div>
            )}
        </div>
    );
};

export default DialogsList;