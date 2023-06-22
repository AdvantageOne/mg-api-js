import { Device } from './device';
import { DeviceEntity, Entity } from './entity';

export interface LogRecord extends Entity, DeviceEntity {
	latitude: number;
	longitude: number;
	speed: number;
	dateTime: string;
	deviceId?: string;
	id: string;
}
