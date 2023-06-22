import { Entity } from "./entity";
import { Group } from "./group";

export interface Device extends Entity {
	obdAlertEnabled: boolean;
	auxWarningSpeed: number[];
	enableAuxWarning: boolean[];
	enableControlExternalRelay: boolean;
	externalDeviceShutDownDelay: number;
	immobilizeArming: number;
	immobilizeUnit: boolean;
	isAuxIgnTrigger: boolean[];
	isAuxInverted: boolean[];
	accelerationWarningThreshold: number;
	accelerometerThresholdWarningFactor: number;
	brakingWarningThreshold: number;
	corneringWarningThreshold: number;
	enableBeepOnDangerousDriving: boolean;
	enableBeepOnRpm: boolean;
	engineHourOffset: number;
	isActiveTrackingEnabled: boolean;
	isDriverSeatbeltWarningOn: boolean;
	isPassengerSeatbeltWarningOn: boolean;
	isReverseDetectOn: boolean;
	isIoxConnectionEnabled: boolean;
	odometerFactor: number;
	odometerOffset: number;
	rpmValue: number;
	seatbeltWarningSpeed: number;
	activeFrom: string;
	activeTo: string;
	autoGroups: any[];
	customParameters: any[];
	disableBuzzer: boolean;
	enableBeepOnIdle: boolean;
	enableMustReprogram: boolean;
	enableSpeedWarning: boolean;
	engineType: string;
	engineVehicleIdentificationNumber: string;
	ensureHotStart: boolean;
	gpsOffDelay: number;
	idleMinutes: number;
	isSpeedIndicator: boolean;
	licensePlate: string;
	licenseState: string;
	major: number;
	minAccidentSpeed: number;
	minor: number;
	parameterVersion: number;
	pinDevice: boolean;
	speedingOff: number;
	speedingOn: number;
	vehicleIdentificationNumber: string;
	goTalkLanguage: string;
	fuelTankCapacity: number;
	disableSleeperBerth: boolean;
	autoHos: string;
	parameterVersionOnDevice: number;
	comment: string;
	groups: Group[];
	timeZoneId: string;
	deviceFlags: DeviceFlags;
	deviceType: string;
	ignoreDownloadsUntil: string;
	maxSecondsBetweenLogs: number;
	name: string;
	productId: number;
	serialNumber: string;
	timeToDownload: string;
	workTime: string;
	devicePlans: string[];
	customFeatures: CustomFeatures;
}

interface CustomFeatures {
}

interface DeviceFlags {
	activeFeatures: any[];
	isActiveTrackingAllowed: boolean;
	isEngineAllowed: boolean;
	isGarminAllowed: boolean;
	isHOSAllowed: boolean;
	isIridiumAllowed: boolean;
	isOdometerAllowed: boolean;
	isTripDetailAllowed: boolean;
	isUIAllowed: boolean;
	isVINAllowed: boolean;
	ratePlans: any[];
}
