export const headerList = (myId: string | undefined) => {
    return [
        {id: 1, title: 'моя страница', speech: 'моя страница', path: `/user/${myId}/profile/posts`},
        {id: 2, title: 'все пользователи', speech: 'все пользователи', path: `/user/${myId}/allUsers`},
        {id: 3, title: 'редактировать профиль', speech: 'редактировать профиль', path: `/user/${myId}/editProfile`},
    ]
}