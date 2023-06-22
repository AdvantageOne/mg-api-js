import { Device } from "./device";
import { DeviceEntity, Entity } from "./entity";

export interface Trip extends Entity, DeviceEntity {
	afterHoursDistance: number;
	afterHoursDrivingDuration: string;
	afterHoursEnd: boolean;
	afterHoursStart: boolean;
	afterHoursStopDuration: string;
	averageSpeed: number;
	distance: number;
	drivingDuration: string;
	idlingDuration: string;
	isSeatBeltOff: boolean;
	maximumSpeed: number;
	nextTripStart: string;
	speedRange1: number;
	speedRange1Duration: string;
	speedRange2: number;
	speedRange2Duration: string;
	speedRange3: number;
	speedRange3Duration: string;
	start: string;
	stop: string;
	stopDuration: string;
	stopPoint: StopPoint;
	workDistance: number;
	workDrivingDuration: string;
	workStopDuration: string;
	driver: string;
	id: string;
}

export interface StopPoint {
	x: number;
	y: number;
}
