import {likeModel} from "../like/like-model";
import {dislikeModel} from "../dislike/dislike-model";


export const postModel = `
id
userId
date
content
likes { ${likeModel} }          
dislikes { ${dislikeModel} }               
`
