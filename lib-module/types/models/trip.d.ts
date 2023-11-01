import { BaseGetCall } from "../index.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { DeviceEntitySearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { GroupEntitySearch } from "./group.js";
import { UserEntitySearch } from "./user.js";

export type TripCall = {
	typeName: "Trip"
}

export type TripSetCall = TripCall & {
	entity: Trip
}

/**
 * Max value 100, min value 0
 */
export type BoundingBox = {
	bottom: number
	left: number
	right: number
	top: number
}

export interface TripSearch extends EntitySearch, DateRangeSearch,  DeviceEntitySearch, UserEntitySearch {
	includeOverlappedTrips?: boolean
	searchArea?: BoundingBox	
}

export type TripGetCall = TripCall & BaseGetCall & { search: TripSearch }

export type TripEntitySearch = { deviceSearch?: Pick<TripSearch, "id"> }

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
