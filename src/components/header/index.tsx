import React from 'react';
import './header.less';
import DefaultAvatar from "../../assets/icon/default-avatar";
import Bell from "../../assets/icon/bell";
import {Badge, Button} from "antd";
import {useActions} from "../../assets/hooks/useActions";

const Header = () => {

    const {logout} = useActions();

    return (
        <div className='header'>
                <div className='header__left-block'>
                    left-block
                </div>
                <div className='header__right-block'>
                    <Badge count={20}>
                        <Bell/>
                    </Badge>
                    <Button
                    onClick={() => logout()}
                    >
                        Выйти
                    </Button>
                    <DefaultAvatar size={50}/>
                </div>
        </div>
    );
};

export default Header;