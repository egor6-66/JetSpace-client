import {imageModel} from "./image";


export const imagesModel = `
id
userId
images { ${imageModel} }                 
`
