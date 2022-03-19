import React, {useState} from 'react';
import './donations.less';
import {Typography} from "antd";
import {Link} from "react-router-dom";
import BanksIcons from "../../assets/icons/banks-icons";

const Donations = () => {

    const {Title} = Typography;

    return (
        <div className='donations'>
            <div className='donations__body'>
                <div className='sberBank'>
                    <Title>8 911 242 8761</Title>
                    <BanksIcons id='sber'/>
                </div>
                <div className='tinkof'>
                    <Title>8 911 242 8761</Title>
                    <BanksIcons id='tinkof'/>
                </div>
                <div className='youMoney'>
                    <Title onClick={() => window.open('https://yoomoney.ru/to/4100117698283853', "_blank")}>Ю MONEY</Title>
                    <BanksIcons id='youMoney'/>
                </div>
            </div>
        </div>
    );
};

export default Donations;