import React from 'react';
import {Link} from "react-router-dom";
import SocialsNetworksIcons from '../../../assets/icon/socials-networks-icons';
import './socials-networks.less';


const SocialsNetworks = () => {
    return (
        <div className='socials-networks'>
            <Link to={'fe'}><SocialsNetworksIcons id='instagram' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='faceBook' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='twitter' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='spotify' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='telegram' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='github' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='soundCloud' size={40}/></Link>
            <Link to={'fe'}><SocialsNetworksIcons id='youTube' size={40}/></Link>
        </div>
    );
};

export default SocialsNetworks;
