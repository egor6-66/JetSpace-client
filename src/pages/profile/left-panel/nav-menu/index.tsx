import React, {FC, useEffect, useState} from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";
import navMenuList from './list';
import {useActions} from "../../../../store/actions";
import {UseTextColor} from "../../../../assets/hooks";
import ActiveLineMenu from "../../../../components/active-line-menu";
import {motion, AnimateSharedLayout} from "framer-motion";
import {Typography} from "antd";
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

    const [activeItem, setActiveItem] = useState<number>(1);

    const onclick = (item: any) => {
        if(item.title === 'музыка') {
            setIsVisibleSoundModal(true)
            setLocation('nav-menu')
        } else{setActiveItem(item.id)}
    }

    useEffect(() => {
        for (const item of navMenuList(myId, currentId)){
            location === item.path.split('/').pop() && setActiveItem(item.id)
        }
    }, [location])

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
        </div>
    );
};

export default NavMenu;
