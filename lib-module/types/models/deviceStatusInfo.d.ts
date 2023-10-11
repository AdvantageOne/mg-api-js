import { DeviceEntity } from "./deviceEntity.js";
import { Entity } from "./entity.js";
import { Group } from "./group.js";

export interface DeviceStatusInfo extends Entity, DeviceEntity {
    bearing: number,
    currentStateDuration: string,
    exceptionEvents: [],
    isDeviceCommunicating: boolean,
    isDriving: boolean,
    latitude: number,
    longitude: number,
    speed: number,
    dateTime: string,
    driver: string,
    isHistoricLastDriver: boolean,
    groups: Group[]
}