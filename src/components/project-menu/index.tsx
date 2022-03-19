import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import {UseTextColor} from '../../assets/hooks'
import {useActions} from "../../store/actions";
import {ProjectMenuIcons} from '../../assets/icons';
import projectMenuList from "./list";
import ActiveLineMenu from "../active-line-menu";
import {Button, Modal, Typography} from "antd";
import {motion, AnimateSharedLayout} from "framer-motion";
import './project-menu.less';


interface ProjectMenuProps {
    myId: string | undefined
}

const ProjectMenu: FC<ProjectMenuProps> = ({myId}) => {

    const {logout} = useActions();
    const {Title} = Typography;

    const colors = UseTextColor()
    const [activeItem, setActiveItem] = useState<number>(0)
    const [isVisibleModalSignOut, setIsVisibleModalSignOut] = useState<boolean>(false)

    return (
        <>
            <AnimateSharedLayout>
                <motion.div className='project-menu'>
                    {projectMenuList.map(item =>
                        <NavLink to={item.path} key={item.id} onClick={() => item.icon === 'signOut' && setIsVisibleModalSignOut(true)}>
                            <motion.div className='project-menu__item' onClick={() => setActiveItem(item.id)}>
                                <motion.div className='project-menu__item_title'
                                            initial={{color: '#000'}}
                                            animate={{color: activeItem === item.id ? colors.active : colors.disabled}}
                                >
                                    {item.title}
                                </motion.div>
                                <div className='project-menu__item_icon'>
                                    <ProjectMenuIcons id={item.icon}/>
                                </div>
                                {activeItem === item.id && <ActiveLineMenu/>}
                            </motion.div>
                        </NavLink>
                    )}
                </motion.div>
            </AnimateSharedLayout>

            <Modal visible={isVisibleModalSignOut}
                   closable={false}
                   centered={true}
                   width={200}
                   bodyStyle={{display: "flex", justifyContent: "center", gap: 15}}
                   footer={false}
            >
                <Button onClick={() => setIsVisibleModalSignOut(false)}>отмена</Button>
                <Button onClick={() => logout(myId)}>выйти</Button>
            </Modal>
        </>
    );
};


export default ProjectMenu;