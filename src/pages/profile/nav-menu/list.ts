const navMenuList = (myId: string | undefined, currentId: string | undefined) => {

    const array = [
        {id: 1, title: 'посты', path: `/user/${currentId}/profile`},
        {id: 2, title: 'диалоги', path: `/user/${myId}/profile/messages`},
        {id: 3, title: 'написать', path: `/user/${currentId}/profile/message/${currentId}`},
        {id: 4, title: 'музыка', path: `#`},
        {id: 5, title: 'видео', path: `/user/${currentId}/profile/videos`},
        {id: 6, title: 'репосты', path: `/user/${currentId}/profile/reposts`},
        {id: 7, title: 'лента', path: `/user/${currentId}/profile/news`},
    ]

    if(myId === currentId) return array.filter(item => item.title !== 'написать')
    else return array.filter(item => item.title !== 'диалоги')
};

export default navMenuList;
