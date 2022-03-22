import React, {FC, useState} from 'react';
import profileMenuItems from "../../list";
import ActiveLineMenu from "../../../../components/active-line-menu";
import {UseTextColor} from "../../../../assets/hooks";
import {AnimateSharedLayout, motion} from "framer-motion";
import './right-panel-menu.less';


interface RightPanelMenuProps {
    likeCounter: number,
    currentId: string | undefined,
    subscribers: string[] | undefined,
    subscriptions:string[] | undefined,
}

const RightPanelMenu: FC<RightPanelMenuProps> = ({likeCounter, currentId, subscribers, subscriptions}) => {

    const colors = UseTextColor();
    const [activeItem, setActiveItem] = useState<number>(0);
    const [focus, setFocus] = useState<boolean>(false)

    const animateVariant = {
        hidden:{
            color: colors.disabled
        },
        initial: (item : any)=> ({
            color: activeItem === item.id && setFocus ? colors.active : colors.disabled
        })
    }
    const animateVariant2 = {
        hidden:{
            color: colors.disabled
        },
        initial: (item : any)=> ({
            color: colors.disabled
        })
    }

    return (
        <AnimateSharedLayout>
            <motion.div className='right-panel-menu'
                onMouseEnter={() => setFocus(true)}
                        onMouseLeave={() => setFocus(false)}
            >
                {profileMenuItems.map(item =>
                    <motion.div onMouseEnter={() => setActiveItem(item.id)}
                                key={item.id}
                                style={{position: 'relative'}}
                                custom={item}
                                variants={focus ? animateVariant : animateVariant2}
                                initial='hidden'
                                animate='initial'
                    >
                        <item.component
                            likeCounter={likeCounter}
                            currentId={currentId}
                            subscribers={subscribers}
                            subscriptions={subscriptions}
                        />
                        {activeItem === item.id && focus && <ActiveLineMenu/>}
                    </motion.div>
                )}
            </motion.div>
        </AnimateSharedLayout>
    );
};

export default RightPanelMenu;