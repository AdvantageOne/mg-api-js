import { BaseGetCall } from "../index.js";
import { Controller } from "./controller.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { GroupEntitySearch } from "./group.js";
import { NameSearch } from "./nameSearch.js";
import { Source, SourceSearch } from "./source.js";
import { UnitOfMeasure } from "./unitOfMeasure.js";

export type DiagnosticCall = {
	typeName: "Diagnostic"
}

export type DiagnosticSetCall = DiagnosticCall & {
	entity: Diagnostic
}

export interface DiagnosticSearch extends EntitySearch, DateRangeSearch, GroupEntitySearch, NameSearch, SourceSearch {
	code?: any
	diagnosticType?: DiagnosticType
}

export type DiagnosticGetCall = DiagnosticCall & BaseGetCall & { search: DiagnosticSearch }

export interface DiagnosticEntitySearch {
	diagnosticSearch?: Pick<Diagnostic, "id">
}

export type DiagnosticType = "BrpFault" | "DataDiagnostic" | "GmcccFault" | "GoDiagnostic" | "GoFault" | "LegacyFault" | "None" | "ObdFault" | "ObdWwhFault" | "Pid" | "ProprietaryFault" | "Sid" | "Source14Fault" | "SuspectParameter";
export type FaultResetMode = "AutoReset" | "None";

export interface Diagnostic extends Entity {
	code: number
	controller: Controller
	diagnosticType: DiagnosticType
	faultResetMode: FaultResetMode
	isReadOnly: boolean
	name: string
	source: string
	tamperingDiagnostics: number
	unitOfMeasure: UnitOfMeasure
	version: string
}
