import { BaseCall, DiagnosticSearch } from "../index.js"
import { ControllerEntitySearch } from "./controller.js"
import { DateRangeSearch } from "./dateRangeSearch.js"
import { DeviceEntitySearch, DeviceSearch, } from "./device.js"
import { DeviceEntity } from "./deviceEntity.js"
import { Diagnostic } from "./diagnostic.js"
import { Entity } from "./entity.js"
import { EntitySearch } from "./entitySearch.js"
import { GroupEntitySearch } from "./group.js"
import { User } from "./user.js"


export type FaultDataCall = {
	typeName: "FaultData"
}

export type FaultDataSetCall = FaultDataCall &{
	entity: FaultData
}  

export interface FaultDataSearch extends EntitySearch, DateRangeSearch, ControllerEntitySearch, DeviceEntitySearch, DiagnosticSearch, GroupEntitySearch {
    inclusiveSearch?: boolean
    state?: string
}

export type FaultDataGetCall = FaultDataCall & BaseCall & { search: FaultDataSearch}

export interface FaultSource extends Entity {
    name: string
}

export interface FailureMode extends Entity {
    code: number
    name: string
    source: FaultSource
}

export type FaultState = "Active" | "Cleared" | "Inactive" | "None" | "Pending";

export interface FlashCode extends Entity {
    circuitIndex: string
    diagnostic: Diagnostic
    failureMode: FailureMode
    flashCodeIndex: string
    helpUrl: string
    name: string
    pageReference: string
    priorityLevel: number
}

export type DtcSeverity = "CheckAtNextHalt" | "CheckImmediately" | "MaintenanceOnly";

export interface FaultData extends Entity, DeviceEntity {
    amberWarningLamp: boolean
    classCode: string
    controller: any
    count: number
    dateTime: string
    diagnostic: Diagnostic
    dismissDateTime: string
    dismissUser: User
    failureMode: FailureMode
    faultLampState: string
    faultState: string
    faultStates: FaultState[]
    flashCode: FlashCode
    malfunctionLamp: boolean
    protectWarningLamp: boolean
    redStopLamp: boolean
    severity: string
    sourceAddress: number
}