import {messageModel} from "./message-model";


export const messagesModel = `
userId
userName
userLastName
userAvatar
messages { ${messageModel} }                 
`
