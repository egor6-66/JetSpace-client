import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useLazyQuery, useMutation} from "@apollo/client";
import {GET_ALL_USER_SOUNDS} from "../../../GRAPHQL/queries/sound-queries";
import {ADD_SOUND} from "../../../GRAPHQL/mutations/sound-mutations";
import ModalAddSounds from "./modal-add-sounds";
import NewLogo from "../../../assets/icons/new-logo";
import AudioPlayer from "../../../components/players/audio-player";
import {Button, Form} from "antd";
import './user-sound.less';


interface UserMusicProps {
    myId: string | undefined,
}

const UserMusic: FC<UserMusicProps> = ({myId}) => {

    const {id: currentId} = useParams();


    const [isVisibleModalAddSound, setIsVisibleModalAddSound] = useState<boolean>(false)
    const [soundType, setSoundType] = useState<string>('soundTracks')

    const btnTitle = soundType === 'soundTracks' ? 'плэйлисты' : 'трэки'

    const [addSound] = useMutation(ADD_SOUND);

    const [getAllUserSound, {loading, data}] = useLazyQuery(GET_ALL_USER_SOUNDS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });

    useEffect(() => {
        getAllUserSound()
    }, [])

    const closedModal = () => setIsVisibleModalAddSound(false)
    const setTypeList = () => soundType === 'soundTracks'? setSoundType('playLists') : setSoundType('soundTracks')

    const onFinish = async (value: any) => {
        await addSound({
            variables: {
                id: myId,
                path: Object.values(value)[0],
                type: Object.keys(value)[0],
            },
        });
        if (!data?.getAllUserSounds) {
            getAllUserSound()
        }
        closedModal()
    }

    return (
        <>
            <ModalAddSounds
                isVisibleModalAddSound={isVisibleModalAddSound}
                closedModal={closedModal}
                onFinish={onFinish}
            />
            <div className='user-music'>
                <Button onClick={() => setIsVisibleModalAddSound(true)}>добавить музыку</Button>
                <Button onClick={setTypeList}>{btnTitle}</Button>
                <div className='user-music__list'>
                    {data && data?.getAllUserSounds[soundType].map((item: any) =>
                        <div key={item.id} className='user-music__list_item'>
                            <AudioPlayer
                                url={item.path}
                                type={item.type}
                            />
                        </div>
                    )}
                </div>
                <NewLogo/>

            </div>
        </>
    );
};

export default UserMusic;