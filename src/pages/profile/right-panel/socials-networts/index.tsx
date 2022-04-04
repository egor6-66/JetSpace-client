import React, {FC} from 'react';
import SocialsNetworksIcons from '../../../../assets/icons/socials-networks';
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
    colors: any,
}


const SocialsNetworks: FC<SocialsNetworksProps> = (props) => {

    const socialsNetworksArray = [];

     for (let [key, value] of Object.entries(props)) {
         key !== 'colors' &&  socialsNetworksArray.push({name: key, path: value})
    }

     const iconClick = (path: string) => {
         window.open(path, "_blank")
     };

    return (
        <div className='socials-networks'
             style={{border: `2px solid ${props?.colors?.border?.active}`}}
        >
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
