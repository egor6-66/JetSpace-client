import {soundModel} from "./sound";


export const soundsModel = `
id
userId
sounds { ${soundModel} }                 
`
