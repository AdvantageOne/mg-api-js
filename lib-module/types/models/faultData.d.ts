import { DeviceEntity, Diagnostic, Entity } from ".."
import { User } from "./user"

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