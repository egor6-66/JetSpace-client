import React, {FC} from 'react';
import wordDeclension from "../../../../assets/functions/word-declension";
import {Typography} from "antd";
import './all-dislikes.less';


interface AllDislikesProps {
    dislikeCounter: number,
}


const AllDislikes:FC<AllDislikesProps> = ({dislikeCounter}) => {

    const {Title} = Typography;

    const word = wordDeclension({
        length: dislikeCounter,
        word: 'дизлайк',
        suffix: ['a', 'ов'],
    })

    return (
        <div className='all-dislikes'>
            {dislikeCounter || 0} {word}
        </div>
    );
};

export default AllDislikes;