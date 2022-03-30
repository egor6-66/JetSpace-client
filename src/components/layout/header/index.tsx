import React, {FC, useEffect, useState} from 'react';
import {Link, NavLink, useLocation, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_NOTIFICATIONS, GET_NOTIFICATIONS_SUB} from "../../../GRAPHQL/queries/notification-queries";
import notificationsSubscriptions from "../../notifications/notifications-subscriptions";
import {SettingsIcon, BellIcon, LogoProjectIcon, PlayerIcons, MusicIcon, VoiceAssistIcon} from '../../../assets/icons'
import ProjectMenu from "../../project-menu";
import {Badge, Typography, Input, Popover, Slider, Button} from "antd";
import projectMenuList from "../../project-menu/list";
import UserSounds from "../../../pages/profile/left-panel/user-sounds";
import {useActions} from "../../../store/actions";
import {useTypedSelector} from "../../../store";
import Notifications from "../../notifications";
import {headerList} from "./list";
import navMenuList from "../../../pages/profile/left-panel/nav-menu/list";
import {UseTextColor} from "../../../assets/hooks";
import {motion} from "framer-motion";
import './header.less';


interface HeaderProps {
    myId: string | undefined,
}

const Header: FC<HeaderProps> = ({myId}) => {

    const {Title} = Typography;
    const {Search} = Input;
    const colors = UseTextColor();
    const location = useLocation().pathname.split('/').pop();
    const {id: currentId} = useParams();

    const {setIsVisibleSoundModal, setLocation, setVolume, setActiveVoiceAssist} = useActions();
    const {sounds, isVisibleSoundModal, volume} = useTypedSelector(state => state.player);
    const {isActivated, name} = useTypedSelector(state => state.voiceAssist);

    const [activeItem, setActiveItem] = useState<number | null>(null);

    const onSearch = (payload: String) => {
        console.log(payload)
    };

    const {data, loading, subscribeToMore} = useQuery( GET_NOTIFICATIONS_SUB, {variables: {myId: myId}});

    const getActiveItem = () => {
        const rout = headerList(myId).find(item => location === item.path.split('/').pop() )
        const childRout = navMenuList(myId, currentId).find(item => location === item.path.split('/').pop() )
        rout ? setActiveItem(rout.id) : childRout ? setActiveItem(1) : setActiveItem(null)
        myId !== currentId && setActiveItem(null)
    };

    useEffect(() => {
        notificationsSubscriptions(subscribeToMore, myId)
    },[]);

    useEffect(() => {
        getActiveItem()
    },[location])

    return (
        <div className='header'>
            <UserSounds myId={myId}/>
            <div className='header__left-block' onMouseLeave={getActiveItem}>
                <LogoProjectIcon size={45} isActiveAnim={false}/>
                {headerList(myId).map(item =>
                    <NavLink key={item.id} to={item.path}>
                        <motion.div className='header__left-block_item'
                                    style={{marginLeft:item.id === 3 ? '-20px' : 0}}
                                    initial={{color: '#000'}}
                                    animate={{color: activeItem === item.id ? colors.active : colors.disabled}}
                                    onMouseEnter={() => setActiveItem(item.id)}
                        >
                            {item.title}
                        </motion.div>
                    </NavLink>
                )}
            </div>
            <div className='header__right-block'>
                <Search placeholder="поиск" onSearch={onSearch} style={{width: 230}}/>
                <Popover content={
                    <div style={{display: "flex", flexDirection: "column", gap: 12, alignItems: "center"}}>
                        <NavLink style={{fontSize: 22, textAlign: "center", lineHeight: '22px'}}
                                 to='editVoiceAssist'>голосовой помощник <br/> {name}</NavLink>
                        <Button onClick={() => setActiveVoiceAssist(!isActivated)}>
                            {isActivated ? 'отключить' : 'включить'}
                        </Button>
                    </div>
                } trigger='click'>
                    <div className='header__right-block_icon'>
                        <VoiceAssistIcon/>
                    </div>
                </Popover>
                <Popover content={
                    <Slider vertical step={0.1} style={{height: 50}} min={0} max={1}
                            onChange={(value) => setVolume(value)}
                            value={volume}/>
                } trigger='click'>
                    <div className='header__right-block_icon'>
                        <PlayerIcons id={'volume'}/>
                    </div>
                </Popover>
                <div className='header__right-block_icon' onClick={() => {
                    setIsVisibleSoundModal(true)
                    setLocation('header')
                }}>
                    <MusicIcon/>
                </div>
                <Badge showZero={false} count={data?.getNotificationsSub.notifications.length}>
                    <Popover content={
                        <Notifications
                            myId={myId}
                            currentId={currentId}
                        />
                    } trigger='click' destroyTooltipOnHide={true}>
                        <div className='header__right-block_icon'>
                            <BellIcon/>
                        </div>
                    </Popover>
                </Badge>
                <Popover destroyTooltipOnHide={!projectMenuList.filter(item => item.path == location).length}
                         content={<ProjectMenu myId={myId}/>}
                         trigger='click'
                         placement="bottomRight">
                    <div className='header__right-block_icon'>
                        <SettingsIcon/>
                    </div>
                </Popover>
            </div>
        </div>
    );
};

export default Header;
