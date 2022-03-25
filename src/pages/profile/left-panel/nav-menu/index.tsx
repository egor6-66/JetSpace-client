import React, {FC, useEffect, useState} from 'react';
import {NavLink, useLocation, useParams, useNavigate} from "react-router-dom";
import navMenuList from './list';
import {useActions} from "../../../../store/actions";
import {UseTextColor} from "../../../../assets/hooks";
import ActiveLineMenu from "../../../../components/active-line-menu";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import {motion, AnimateSharedLayout} from "framer-motion";
import {Button, Typography} from "antd";
import './nav-menu.less';


interface NavMenuProps {
    myId: string | undefined,
    currentId: string | undefined,
}

const NavMenu: FC<NavMenuProps> = ({myId, currentId}) => {

    const {Title} = Typography;
    const {setIsVisibleSoundModal, setLocation} = useActions();
    const colors = UseTextColor();
    const location = useLocation().pathname.split('/').pop();
    let navigate = useNavigate();

    const [activeItem, setActiveItem] = useState<number>(1);
    const [redirectUrl, setRedirectUrl] = useState<string>('')

    const commands = [
        {
            command: ["Go to *", "Open *"],
            callback: (redirectPage: any) => setRedirectUrl(redirectPage)
        }
    ]


    const {transcript} = useSpeechRecognition({commands})

    useEffect(() => {
        for (const item of navMenuList(myId, currentId)) {
           if(redirectUrl.toLowerCase() === item.speech) {
                setActiveItem(item.id)
               navigate(item.path)
            }
        }
    }, [transcript, redirectUrl])


    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //     return <span>Browser doesn't support speech recognition.</span>;
    // }

    const onclick = (item: any) => {
        if (item.title === 'музыка') {
            setIsVisibleSoundModal(true)
            setLocation('nav-menu')
        } else {
            setActiveItem(item.id)
        }
    }

    useEffect(() => {
        for (const item of navMenuList(myId, currentId)) {
            location === item.path.split('/').pop() && setActiveItem(item.id)
        }
    }, [location])

    const startVoiceNavigations = async () =>{
        console.log('timer')
            await SpeechRecognition.startListening({
                language: 'ru',
                continuous: true,
            })
    }

    return (
        <div className='nav-menu'>
            {navMenuList(myId, currentId).map(item =>
                <NavLink key={item.id} to={item.path} className='nav-menu__item'>
                    <motion.div
                        onClick={() => onclick(item)}
                        initial={{color: '#000'}}
                        animate={{color: activeItem === item.id ? colors.active : colors.disabled}}
                    >
                        {item.title}
                    </motion.div>
                    {activeItem === item.id && <ActiveLineMenu/>}
                </NavLink>
            )}
            <Button onClick={startVoiceNavigations}>Start</Button>
        </div>
    );
};

export default NavMenu;
