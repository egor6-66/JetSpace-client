import React, {FC} from 'react';
import {UseColor} from "../../../assets/hooks";
import './spinner-1.less';


interface Spinner1Props {
    size: number | string
}

const Spinner1:FC<Spinner1Props> = ({size}) => {

    const colors = UseColor();

    return (
    <div className='spinner-1'>
        <svg className="loader"
             viewBox="0 0 100 100"
             width={size}
             height={size}
        >

            <g className="points">
                <circle className="ciw" cx="50" cy="50" r="50" fill={colors?.svg?.svg}></circle>
                <circle className="ci2" cx="5" cy="50" r="4" fill={colors?.svg?.path}/>
                <circle className="ci1" cx="95" cy="50" r="4" fill={colors?.svg?.path}/>
            </g>
        </svg>
    </div>
    );
};

export default Spinner1;
