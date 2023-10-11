import { BaseCall } from "../index.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { DeviceEntityAndGroupSearch, DeviceEntitySearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity.js";
import { Diagnostic, DiagnosticEntitySearch } from "./diagnostic.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { GroupEntitySearch } from "./group.js";

export type StatusDataCall = {
	typeName: "StatusData"
}

export type StatusDataSetCall = StatusDataCall & {
	entity: StatusData
}

export interface StatusDataSearch extends EntitySearch, DeviceEntityAndGroupSearch, DiagnosticEntitySearch, DateRangeSearch {
}

export type StatusDataGetCall = StatusDataCall & BaseCall & { search: StatusDataSearch }

export type StatusDataEntitySearch = { deviceSearch?: Pick<StatusDataSearch, "id"> }

export interface StatusData extends Entity, DeviceEntity {
	data: number;
	dateTime: string;
	diagnostic: Diagnostic;
	controller?: string;
	version?: string;
}
