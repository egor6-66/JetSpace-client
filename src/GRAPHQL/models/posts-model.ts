import {postModel} from "./post-model";


export const postsModel = `
userId
posts { ${postModel} }                 
`
