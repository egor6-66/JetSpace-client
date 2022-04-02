import {ISounds} from "./sounds-model";

export interface IPlayer {
    playing: boolean
    isVisibleSoundModal: boolean
    location: string | null,
    soundVolume: number,
    voiceMessageVolume: number,
    sounds: ISounds | null
}