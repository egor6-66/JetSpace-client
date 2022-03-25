import {likeModel} from "../like/like-model";
import {dislikeModel} from "../dislike/dislike-model";
import {commentModel} from "../comment/comment-model";


export const postModel = `
id
userId
date
content
likes { ${likeModel} }          
dislikes { ${dislikeModel} }     
comments { ${commentModel} }          
`
