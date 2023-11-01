import { BaseGetCall } from "../index.js";
import { AnnotationLog } from "./annotation.js"
import { DateRangeSearch } from "./dateRangeSearch.js";
import { DeviceEntitySearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity";
import { Driver } from "./driver.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { LogRecord } from "./logRecord.js";
import { User, UserGroupEntitySearch, UserSearch } from "./user.js"

export type DutyStatusLogCall = {
	typeName: "DutyStatusLog"
}

export type DutyStatusLogSetCall = DutyStatusLogCall & {
	entity: DutyStatusLog
}

export interface DutyStatusLogSearch extends EntitySearch, DateRangeSearch, DeviceEntitySearch, UserGroupEntitySearch {
    includeBoundaryLogs?: boolean
    includeModifications?: boolean
    statuses?: DutyStatusLogType[]
}

export type DutyStatusLogGetCall = DutyStatusLogCall & BaseGetCall & { search: DutyStatusLogSearch }

export type DutyStatusLogEntitySearch = { deviceSearch?: Pick<DutyStatusLogSearch, "id"> }

export type DutyStatusDeferralType = "DayOne" | "DayTwo" | "None";

export enum EventRecordStatus {
    "active",
    "inactive - changed",
    "inactive - change requested",
    "inactive - change rejected"
}

export type DutyStatusMalfunctionTypes = "Diagnostic" | "DiagnosticManualPosition" | "Malfunction" | "MalfunctionManualPosition" | "ManualPosition" | "None" | "SystemDiagnosticClear" | "SystemDiagnosticClearDriving" | "UserDiagnosticClear" | "UserMalfunctionClear";
export type DutyStatusOrigin = "Automatic" | "Manual" | "OtherUser" | "Unassigned";
export type DutyStatusState = "Active" | "Inactive" | "Requested" | "Rejected";
export type DutyStatusLogType = "AdverseWeather" | "Authority" | "CanadaCycleOne" | "CanadaCycleTwo" | "Certify" | "Connected" | "D" | "DataRecordingCompliance" | "DataTransferCompliance" | "Disconnected" | "EnginePowerup" | "EnginePowerupPC" | "EngineShutdown" | "EngineShutdownPC" | "EngineSyncCompliance" | "Exemption16H" | "ExemptionOffDutyDeferral" | "HosDisabled" | "HosEnabled" | "INT_CoDriver" | "INT_D" | "INT_PC" | "Login" | "Logoff" | "MissingElementCompliance" | "OFF" | "ON" | "OperatingZoneAmerica" | "OperatingZoneCanadaNorthOf60" | "OperatingZoneCanadaSouthOf60" | "OtherCompliance" | "PC" | "PC_Exempted" | "PositioningCompliance" | "PowerCompliance" | "RailroadExemption" | "Rest" | "SB" | "SituationalDrivingClear" | "TimingCompliance" | "UnidentifiedDrivingCompliance" | "WT" | "Work" | "WorkExemption" | "YM";

export interface DutyStatusLog extends Entity, DeviceEntity {
    annotations: AnnotationLog[]
    coDrivers: Pick<User, "id">[]
    dateTime: string
    deferralMinutes: number
    deferralStatus: DutyStatusDeferralType
    driver: Driver
    editDateTime: string
    editRequestedByUser: User
    engineHours: number
    eventCode: number
    eventRecordStatus: EventRecordStatus
    isHidden: boolean
    isTransitioning: boolean
    location: LogRecord
    malfunction: DutyStatusMalfunctionTypes
    odometer: number
    origin: DutyStatusOrigin
    parentId: Pick<DutyStatusLog, "id">
    sequence: string
    state: DutyStatusState
    status: DutyStatusLogType
    verifyDateTime: string
    version: string
}