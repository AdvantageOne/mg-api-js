import { BaseGetCall } from "..";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { User } from "./user.js";


export type DVIRDefectCall = {
	typeName: "DVIRDefect"
}

export type DVIRDefectSetCall = DVIRDefectCall & {
	entity: DVIRDefect
}

export interface DVIRDefectSearch extends EntitySearch {
}

export type DVIRDefectGetCall = DVIRDefectCall & BaseGetCall & { search: DVIRDefectSearch }

export type DVIRDefectEntitySearch = { deviceSearch?: Pick<DVIRDefectSearch, "id"> }

export type DefectSeverity = "Critical" | "Normal" | "Unregulated";
export type RepairStatusType = "NotNecessary" | "NotRepaired" | "Repaired";

export interface Defect extends Entity {
    isHidden: boolean
    isRequired: boolean
    severity: DefectSeverity
    children: any[]
    comments: string
    name: string
    parent: any
    reference: string
}

export interface DefectRemark extends Entity {
    dateTime: string
    remark: string
    user: User
}

export interface DVIRDefect extends Entity {
    defect: Defect
    defectRemarks: DefectRemark[]
    repairDateTime: string
    repairStatus: RepairStatusType
    repairUser: User
}