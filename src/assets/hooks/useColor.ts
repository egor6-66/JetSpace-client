import {themes} from "../../constants";

const UseColor = () => {
    const body = document.querySelector("body");
    const elems = Array.prototype.slice.call(body?.classList);
    const theme = elems.find(i => themes.indexOf(i) > -1)

    switch (theme){
        case 'dark':
            return {
                text:{active: '#eb2f96', disabled: '#9e1068'},
                border:{active: '#595959', disabled: '#141414'},
                bc: {active: '#1A1A1D', disabled: '#000'},
                svg: {svg: "url(#svg-bc-dark-theme)", path:'#262626',}
            }

        default: return null
    }

}

export default UseColor