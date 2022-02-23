import React, {FC} from 'react';
import { useActions } from "../../assets/hooks/useActions";
import Bell from "../../assets/icon/bell";
import { Badge, Button } from "antd";
import './header.less';


interface HeaderProps {
    myId: string,
}

const Header:FC<HeaderProps> = ({myId}) => {

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
                    onClick={() => logout(myId)}
                    >
                        Выйти
                    </Button>

                </div>
        </div>
    );
};

export default Header;
