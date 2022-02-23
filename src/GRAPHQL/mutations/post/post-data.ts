const postData = `
    id
    userName
    userLastName
    userAvatar
    posts{
        id
        date
        time
        content
        likes{
            id
            name
            lastName
        }
    }
`

export default postData;
