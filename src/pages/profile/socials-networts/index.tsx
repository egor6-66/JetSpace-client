import React, {FC} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import SocialsNetworksIcons from '../../../assets/icon/socials-networks-icons';
import './socials-networks.less';


interface SocialsNetworksProps {
    instagram: String | undefined,
    facebook: String | undefined,
    twitter: String | undefined,
    spotify: String | undefined,
    telegram: String | undefined,
    github: String | undefined,
    soundCloud: String | undefined,
    youTube: String | undefined,

}


const SocialsNetworks: FC<SocialsNetworksProps> = (props) => {

    const navigate = useNavigate();

    const socialsNetworksArray = []

     for (let [key, value] of Object.entries(props)) {
        socialsNetworksArray.push({name: key, path: value})
    }

     const iconClick = (path: string) => {
         window.open(path, "_blank")
     }

    return (
        <div className='socials-networks'>
            {socialsNetworksArray?.map(({name, path}) =>
                <div className={`socials-networks__link ${path && 'socials-networks__link_present'}`}
                     onClick={() => iconClick(path)}
                     key={name}
                >
                    <SocialsNetworksIcons id={name} size={40}/>
                </div>
            )}
        </div>
    );
};

export default SocialsNetworks;
