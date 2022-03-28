import {darkTheme} from '../themes/dark-theme'
import Defs from "../icons/DEFS";


const UseColor = () => {

    // @ts-ignore
    const theme = document.querySelector("body").classList[0]

    switch (theme){
        case 'dark':
            return {
                bc: {
                    active: '#1A1A1D',
                    disabled: '#000'
                },
                svg: {
                    svg: "url(#svg-bc-dark-theme)",
                    path:'#262626',
                }

            }

        default: return {active: '#6666', disabled: '#000'}
    }

}

export default UseColor