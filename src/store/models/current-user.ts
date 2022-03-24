export enum ActionsTypes {
    GER_USER = 'GER_USER',
    ADD_LIKE = 'ADD_LIKE',
    ADD_DISLIKE = 'ADD_DISLIKE',
    REMOVE_LIKE = 'REMOVE_LIKE',
    REMOVE_DISLIKE = 'REMOVE_DISLIKE',
}

interface getUser {type: ActionsTypes.GER_USER,payload: any}
interface addLike {type: ActionsTypes.ADD_LIKE}
interface addDislike {type: ActionsTypes.ADD_DISLIKE}
interface removeLike {type: ActionsTypes.REMOVE_LIKE}
interface removeDislike {type: ActionsTypes.REMOVE_DISLIKE}

export type Actions =
    getUser |
    addLike |
    addDislike |
    removeLike |
    removeDislike


