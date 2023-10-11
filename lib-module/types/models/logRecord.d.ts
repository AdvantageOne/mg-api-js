import { BaseCall } from '../index.js';
import { DateRangeSearch } from './dateRangeSearch.js';
import { EntityDeviceSearch } from './device.js';
import { DeviceEntity } from './deviceEntity.js';
import { Entity } from './entity.js';
import { EntitySearch } from './entitySearch.js';

export type LogRecordCall = {
	typeName: "LogRecord"
}

export type LogRecordSetCall = LogRecordCall &{
	entity: LogRecord
}  

export interface LogRecordSearch extends EntitySearch, EntityDeviceSearch, DateRangeSearch {

}

export type LogRecordGetCall = LogRecordCall & BaseCall & { search: LogRecordSearch}

export interface LogRecord extends Entity, DeviceEntity {
	latitude: number;
	longitude: number;
	speed: number;
	dateTime: string;
	deviceId?: string;
	id: string;
}
