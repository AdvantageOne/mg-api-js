import { BaseGetCall } from '../index.js';
import { DateRangeSearch } from './dateRangeSearch.js';
import { DeviceEntitySearch } from './device.js';
import { DeviceEntity } from './deviceEntity.js';
import { Entity } from './entity.js';
import { EntitySearch } from './entitySearch.js';

export type LogRecordCall = {
	typeName: "LogRecord"
}

export type LogRecordSetCall = LogRecordCall &{
	entity: LogRecord
}  

export interface LogRecordSearch extends EntitySearch, DeviceEntitySearch, DateRangeSearch {

}

export type LogRecordGetCall = LogRecordCall & BaseGetCall & { search: LogRecordSearch}

export interface LogRecord extends Entity, DeviceEntity {
	latitude: number;
	longitude: number;
	speed: number;
	dateTime: string;
	deviceId?: string;
	id: string;
}
