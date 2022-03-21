import {ISounds} from "./sounds-model";

export interface IPlayer {
    playing: boolean
    isVisibleSoundModal: boolean
    location: string | null,
    volume: number
    sounds: ISounds | null
}