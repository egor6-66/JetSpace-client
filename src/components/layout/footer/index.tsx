import React, {FC} from 'react';
import UserSounds from "../../../pages/profile/user-sounds";
import './footer.less';
import {useActions} from "../../../store/actions";
import {useTypedSelector} from "../../../store";


interface FooterProps{
    myId: string | undefined,
}

const Footer:FC<FooterProps> = ({myId}) => {

    const {setPlaying} = useActions();
    const {playing} = useTypedSelector(state => state.player);


    return (
        <div className='footer'>
            <div onClick={() => setPlaying(!playing)}>
                play
            </div>

            <UserSounds myId={myId}/>
        </div>
    );
};

export default Footer;