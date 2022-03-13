import React from 'react';
import wordDeclension from "../../../assets/functions/word-declension";
import {Typography} from "antd";
import './all-dislikes.less';


const AllDislikes = () => {

    const {Title} = Typography;

    const word = wordDeclension({
        length: 5,
        word: 'дизлайк',
        suffix: ['a', 'ов'],
    })

    return (
        <div className='all-dislikes'>
            <Title level={2}> 5 {word}</Title>
        </div>
    );
};

export default AllDislikes;