import { DateRangeSearch } from "./dateRangeSearch.js"
import { DeviceEntitySearch } from "./device"
import { DeviceEntity } from "./deviceEntity"
import { Driver } from "./driver.js"
import { Entity } from "./entity.js"
import { EntitySearch } from "./entitySearch.js"
import { UserEntitySearch } from "./user"

export type DriverChangeCall = {
	typeName: "DriverChange"
}

export type DriverChangeSetCall = DriverChangeCall & {
	entity: DriverChange
}

export interface DriverChangeSearch extends EntitySearch, DeviceEntitySearch, DateRangeSearch, UserEntitySearch {
    includeOverlappedChanges?: boolean
    type?: DriverChangeType
}

export type DriverChangeGetCall = DriverChangeCall & { search: DriverChangeSearch }

export type DriverChangeEntitySearch = { deviceSearch?: Pick<DriverChangeSearch, "id"> }

export type DriverChangeType = "Driver" | "DriverKey" | "DriverVehicleChange" | "None" | "ResetDriver" | "TripDriver";
export interface DriverChange extends Entity, DeviceEntity {
    dateTime: string
    driver: Driver
    type: DriverChangeType
    version: string
}