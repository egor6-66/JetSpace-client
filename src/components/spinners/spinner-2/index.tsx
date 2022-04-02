import React, {FC} from 'react';
import {UseColor} from "../../../assets/hooks";
import './spinner-2.less';


interface Spinner2Props {
    size: number | string
}

const Spinner2: FC<Spinner2Props> = ({size}) => {

    const colors = UseColor();

    return (
        <div className='spinner-2'>
            <svg viewBox="0 0 120 120"
                 width={size}
                 height={size}
                 fill={colors?.svg?.svg}
            >
                <g className="g1">
                    <rect fill={colors?.svg?.svg} className="Spinner2_r1" x="30" y="30" width="60" height="60"/>
                    <rect fill={colors?.svg?.path} className="Spinner2_big" x="81" y="81" width="8" height="8"/>
                    <rect fill={colors?.svg?.path} className="Spinner2_r_ol" x="31" y="31" width="8" height="8"/>
                    <rect fill={colors?.svg?.path} className="Spinner2_r_or" x="81" y="31" width="8" height="8"/>
                    <rect fill={colors?.svg?.path} className="Spinner2_r_ul" x="31" y="81" width="8" height="8"/>
                </g>
            </svg>
        </div>
    );
};

export default Spinner2;