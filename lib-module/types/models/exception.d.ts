import { BaseGetCall } from "../index.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { DeviceEntityAndGroupSearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { Rule, RuleEntitySearch } from "./rule.js";

export type ExceptionEventCall = {
	typeName: "ExceptionEvent"
}

export type ExceptionEventSetCall = ExceptionEventCall &{
	entity: ExceptionEvent
}  

export interface ExceptionEventSearch extends EntitySearch, DeviceEntityAndGroupSearch, RuleEntitySearch, DateRangeSearch {
	includeInvalidated?: boolean
}

export type ExceptionEventGetCall = ExceptionEventCall & BaseGetCall & { search: ExceptionEventSearch}

export interface Exception extends ExceptionEvent {
}

export interface ExceptionEvent extends Entity, DeviceEntity {
	activeFrom: string;
	activeTo: string;
	distance: number;
	duration: string;
	rule: Rule;
	diagnostic: string;
	driver: string;
	version: string;
	id: string;
}

export interface CustomExceptionEvent extends ExceptionEvent {
	custom?: any
	ruleId?: string
	deviceId: string
}

