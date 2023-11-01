import { BaseGetCall } from "..";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { DeviceEntityAndGroupSearch, DeviceSearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity.js";
import { Driver } from "./driver.js";
import { DVIRDefect } from "./dvirDefect.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { Group } from "./group.js";
import { LogRecord } from "./logRecord.js";
import { Trailer } from "./trailer.js";
import { User, UserIdSearch } from "./user.js";


export type DVIRLogCall = {
    typeName: "DVIRLog"
}

export type DVIRLogSetCall = DVIRLogCall & {
    entity: DVIRLog
}

export interface DVIRLogSearch extends EntitySearch, DateRangeSearch, DeviceEntityAndGroupSearch {
    certifiedBySearch?: UserIdSearch
    defectSearch: { id: string }[]
    includeBoundaryLogs?: boolean
    isSafeToOperate?: boolean
    logTypes: DVIRLogType[]
    repairedBySearch?: UserIdSearch
    trailerSearch: { id?: string, groups?: Pick<Group, "id">[] }
    userSearch?: UserIdSearch
}

export type DVIRLogGetCall = DVIRLogCall & BaseGetCall & { search: DVIRLogSearch }

export type DeviceEntitySearch = { deviceSearch?: Pick<DeviceSearch, "id"> }

export type DVIRLogType = "InTrip" | "PostTrip" | "PreTrip" | "Unknown";

export interface DVIRLog extends Entity, DeviceEntity {
    authorityAddress: string
    authorityName: string
    certifiedBy: User
    certifyDate: string
    certifyRemark: string
    dVIRDefects: DVIRDefect[]
    dateTime: string
    defectList: any[]
    defects: any[]
    driver: Driver
    driverRemarks: string
    isInspectedByDriver: boolean
    isSafeToOperate: boolean
    loadHeight: number
    loadWidth: number
    location: LogRecord
    logType: DVIRLogType
    odometer: number
    repairDate: string
    repairRemark: string
    repairedBy: User
    trailer: Trailer
    version: string
}