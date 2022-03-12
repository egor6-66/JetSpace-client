import {soundModel} from "./sound";


export const soundsModel = `
id
userId
soundTracks { ${soundModel} }   
playLists { ${soundModel} }                  
`
