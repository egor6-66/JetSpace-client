import React from 'react';
import BanksIcons from "../../assets/icons/banks-icons";
import {motion} from "framer-motion";
import './donations.less';
import {Typography} from "antd";


const Donations = () => {

    const {Title} = Typography;

    return (
        <motion.div className='donations'
             initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}
        >
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
        </motion.div>
    );
};

export default Donations;