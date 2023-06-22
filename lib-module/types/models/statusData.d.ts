import { Device } from "./device";
import { Diagnostic } from "./diagnostic";
import { DeviceEntity, Entity } from "./entity";

export interface StatusData extends Entity, DeviceEntity {
	data: number;
	dateTime: string;
	diagnostic: Diagnostic;
	controller?: string;
	version?: string;
}
