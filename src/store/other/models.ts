export interface OtherState {
  notifications: any[]
}

export enum OtherActionTypes {
    GET_NOTIFICATION = 'GET_NOTIFICATION',
    CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',
}

interface getNotificationAction {type: OtherActionTypes.GET_NOTIFICATION,payload: {}}
interface clearNotificationAction {type: OtherActionTypes.CLEAR_NOTIFICATION}


export type OtherAction =
    getNotificationAction |
    clearNotificationAction
;
