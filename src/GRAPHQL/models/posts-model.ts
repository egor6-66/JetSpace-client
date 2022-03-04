import {postModel} from "./post-model";
import {likeModel} from "./like-model";
import {dislikeModel} from "./dislike-model";


export const postsModel = `
userId
posts { ${postModel} }                 
`
