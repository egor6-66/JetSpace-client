const navMenuList = (myId: string | undefined, currentId: string | undefined) => {

    const array = [
        {id: 1, title: 'посты', speech: 'посты', path: `/user/${currentId}/profile/posts`},
        {id: 2, title: 'диалоги', speech: 'dialogue',path: `/user/${myId}/profile/messages`},
        {id: 3, title: 'написать', speech: 'написать',path: `/user/${currentId}/profile/message/${currentId}`},
        {id: 4, title: 'музыка', speech: 'музыка',path: `#`},
        {id: 5, title: 'видео', speech: 'video',path: `/user/${currentId}/profile/videos`},
        {id: 6, title: 'репосты', speech: 'репосты',path: `/user/${currentId}/profile/reposts`},
        {id: 7, title: 'лента', speech: 'лента',path: `/user/${currentId}/profile/news`},
    ]

    if(myId === currentId) return array.filter(item => item.title !== 'написать')
    else return array.filter(item => item.title !== 'диалоги')
};

export default navMenuList;
