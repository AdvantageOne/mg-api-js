export interface Entity {
  id?: string;
}

export interface DeviceEntity {
  device?: Device;
}

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

interface CustomFeatures {}

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

export interface DeviceStatusInfo {
  bearing: number;
  currentStateDuration: string;
  exceptionEvents: [];
  isDeviceCommunicating: boolean;
  isDriving: boolean;
  latitude: number;
  longitude: number;
  speed: number;
  dateTime: string;
  device: {
    id: string;
  };
  driver: string;
  isHistoricLastDriver: boolean;
  groups: [
    {
      children: [];
      id: string;
    }
  ];
}

export interface Diagnostic extends Entity {
  unitOfMeasure: string;
}

export interface Exception extends ExceptionEvent {}

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
  custom?: any;
  ruleId?: string;
  deviceId: string;
}

export interface Group extends Entity {
  children?: Group[];
  color?: Color;
  comments?: string;
  name?: string;
  reference?: string;
}

interface Color {
  a: number;
  b: number;
  g: number;
  r: number;
}

export interface LogRecord extends Entity, DeviceEntity {
  latitude: number;
  longitude: number;
  speed: number;
  dateTime: string;
  deviceId?: string;
  id: string;
}

export interface Rule extends Entity {
  activeFrom?: string;
  activeTo?: string;
  baseType?: string;
  color?: Color;
  comment?: string;
  condition?: Condition;
  name?: string;
  groups?: Group[];
  version?: string;
}

export interface Color {
  a: number;
  b: number;
  g: number;
  r: number;
}

export interface ChildRule extends Entity {
  children: Condition[];
  conditionType: string;
  sequence: string;
  value: number;
  unit?: string;
}

export interface Condition extends Entity {
  children?: ChildRule[];
  conditionType: string;
  sequence: string;
  diagnostic?: Diagnostic;
}

export interface StatusData extends Entity, DeviceEntity {
  data: number;
  dateTime: string;
  diagnostic: Diagnostic;
  controller?: string;
  version?: string;
}

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

export interface User extends Entity {
  acceptedEULA: number;
  activeDashboardReports: any[];
  activeFrom: Date;
  activeTo: Date;
  authorityAddress: string;
  authorityName: string;
  availableDashboardReports: any[];
  cannedResponseOptions: any[];
  carrierNumber: string;
  changePassword: boolean;
  comment: string;
  companyAddress: string;
  companyGroups: Group[];
  companyName: string;
  countryCode: string;
  dateFormat: string;
  defaultGoogleMapStyle: string;
  defaultHereMapStyle: string;
  defaultMapEngine: string;
  defaultOpenStreetMapStyle: string;
  defaultPage: string;
  designation: string;
  driveGuideVersion: number;
  electricEnergyEconomyUnit: string;
  employeeNo: string;
  firstDayOfWeek: string;
  firstName: string;
  fuelEconomyUnit: string;
  hosRuleSet: string;
  isEmailReportEnabled: boolean;
  isEULAAccepted: boolean;
  isExemptHOSEnabled: boolean;
  isLabsEnabled: boolean;
  isMetric: boolean;
  isNewsEnabled: boolean;
  isPersonalConveyanceEnabled: boolean;
  isServiceUpdatesEnabled: boolean;
  isYardMoveEnabled: boolean;
  language: string;
  lastAccessDate: Date;
  lastName: string;
  mapViews: MapView[];
  name: string;
  phoneNumber: string;
  phoneNumberExtension: string;
  privateUserGroups: Group[];
  reportGroups: Group[];
  securityGroups: Group[];
  showClickOnceWarning: boolean;
  timeZoneId: string;
  userAuthenticationType: string;
  wifiEULA: number;
  zoneDisplayMode: string;
}

export interface MapView {
  name: string;
  viewport: Viewport;
  highlightGroups: any[];
}

export interface Viewport {
  x: number;
  y: number;
  width: number;
  height: number;
}
