import {likeModel} from "./like-model";
import {dislikeModel} from "./dislike-model";


export const postModel = `
id
userId
date
content
likes { ${likeModel} }          
dislikes { ${dislikeModel} }               
`
