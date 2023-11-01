import { BaseGetCall } from "../index.js";
import { Coordinate } from "./coordinate.js";
import { DeviceEntitySearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity.js";
import { Entity } from "./entity.js";
import { Group } from "./group.js";

export type DeviceStatusInfoCall = {
	typeName: "DeviceStatusInfo"
}

export type DeviceStatusInfoSetCall = DeviceStatusInfoCall & {
	entity: DeviceStatusInfo
}

export interface DeviceStatusInfoSearch extends DeviceEntitySearch {
    closestAssetLimit?: number
    position?: Coordinate
}

export type DeviceStatusInfoGetCall = DeviceStatusInfoCall & BaseGetCall & { search: DeviceStatusInfoSearch }

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