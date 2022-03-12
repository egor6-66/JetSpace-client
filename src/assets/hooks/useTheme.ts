import {useEffect} from "react";


 const UseTheme = (newTheme: string | undefined, allThemes: string[], dependence: any) =>{
     useEffect(() => {
         if(newTheme){
             allThemes.forEach(theme =>{
                 theme !== newTheme && document.body.classList.remove(theme)
             })
             document.body.classList.add(newTheme);
         }
     },[dependence])
}

export default UseTheme;
