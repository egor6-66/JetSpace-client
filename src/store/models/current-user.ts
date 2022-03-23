export enum ActionsTypes {
    GER_USER = 'GER_USER',
}

interface getUser {type: ActionsTypes.GER_USER,payload: any}

export type Actions =
    getUser


