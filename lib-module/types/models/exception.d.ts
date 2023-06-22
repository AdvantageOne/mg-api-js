import { DeviceEntity, Entity } from "./entity";
import { Rule } from "./rule";

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

