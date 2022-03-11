import React, {FC, useEffect, useRef, useState} from 'react';
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_USER_SOUNDS} from "../../../GRAPHQL/queries/sound-queries";
import $axios from "../../../services/axios-customs";
import {API_URL} from "../../../assets/constants";
import {Upload, Button} from "antd";
import soundNotification from "../../../assets/sounds/soundNotification.mp3";
import {useParams} from "react-router-dom";
import NewLogo from "../../../assets/icon/new-logo";
import ReactPlayer from "react-player";
import Logo from "../../../assets/icon/logo";
import {ReactPlayerCustoms} from "../../../components/react-player-customs";
import './user-music.less';
import AudioPlayer from "../../../components/players/audio-player";


interface UserMusicProps {
    myId: string | undefined,
}

const UserMusic: FC<UserMusicProps> = ({myId}) => {

    const {id: currentId} = useParams();
    const [soundPath, setSoundPath] = useState<string>('')

    const [getAllUserImg, {loading, data}] = useLazyQuery(GET_ALL_USER_SOUNDS, {
        fetchPolicy: 'cache-and-network',
        variables: {
            id: currentId,
        }
    });



    useEffect(() => {
        getAllUserImg()
    }, [])


    const customRequest = async ({file}: any) => {
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('sound', file);
            await $axios.post(`${API_URL}/fileUpload`, bodyFormData)
        } catch (e) {

        } finally {
        }
    };

    const playSound = (path: string) => {
        setSoundPath(path)

    }
    console.log(soundPath)
    return (
        <div className='user-music'>
            <Upload
                accept={'audio/*'}
                name="sound"
                headers={{"content-type": "multipart/form-data"}}
                showUploadList={false}
                customRequest={customRequest}
            >
                <Button>Click to Upload</Button>
            </Upload>
            <div className='user-music__list'>
                {data && data?.getAllUserSounds?.sounds.map((sound: any) =>
                    <div key={sound.id} className='user-music__list_item'>
                        <AudioPlayer

                            url={'https://soundcloud.com/maybezawtra/sets/ta4ka?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}
                        />
                    </div>
                )}
            </div>
            <NewLogo/>

        </div>
    );
};

export default UserMusic;