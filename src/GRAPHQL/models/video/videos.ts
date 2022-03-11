import {videoModel} from "./video";


export const videosModel = `
id
userId
videos { ${videoModel} }                 
`
