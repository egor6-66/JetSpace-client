import React from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
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
            5 {word}
        </div>
    );
};

export default AllDislikes;