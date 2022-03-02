import {themes} from "../constants";

export const choiceTheme = (newTheme: string) =>{
    if(newTheme){
        themes.forEach(theme =>{
            theme !== newTheme && document.body.classList.remove(theme)
        })
        document.body.classList.add(newTheme);
    }
}