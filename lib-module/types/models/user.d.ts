import { Group, GroupEntitySearch } from "./group.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { HosRuleSet } from "./HOSRuleSet.js";
import { BaseGetCall } from "../index.js";
import { MediaFile } from "./mediaFile.js";

export type UserCall = {
	typeName: "User"
}

export type UserSetCall = UserCall & {
	entity: User
}

export type DateTimeComparator = "AfterOrEqual" | "Before";

export type UserSearchType = "All" | "Driver" | "OnlyUser";

export interface UserSearch extends EntitySearch, DateRangeSearch {
	authenticationTypes: UserAuthenticationType[];
	companyGroups: Pick<Group, "id">[];
	driverGroups: Pick<Group, "id">[];
	employeeNumber: string;
	firstName: string;
	hosRuleSets: HosRuleSet[];
	keyId: string;
	keywords: string[];
	lastLogin: any
	lastLoginComparator: DateTimeComparator
	lastName: string;
	licenseNumber: string;
	name: string;
	securityGroups: Pick<Group, "id">[];
	serialNumber: string;
	userIds: string[];
	userSearchType: UserSearchType
}

export type UserGetCall = UserCall & BaseGetCall & { search: UserSearch }

export type UserIdSearch = Pick<User,"id">;
export type UserGroupSearch = { groupSearch?: { group: Pick<Group, "id">} }
export type UserEntitySearch = { userSearch?: Pick<UserSearch, "id"> }
export type UserGroupEntitySearch = { userSearch?: UserIdSearch & UserGroupSearch }

export type UserAuthenticationType = "BasicAuthentication" | "MyAdmin" | "SAML";

export type GoogleMapStyle = "Roadmap" | "Satellite" | "Hybrid" | "Terrain";
export type MapEngine = "GoogleMaps" | "HereMap" | "MapBox";
export type OpenStreetMapStyle = "MapBox" | "None" | "Satellite" | "Transport";
export type ElectricEnergyEconomyUnit = "KiloWhPer100Km" | "KiloWhPer100Miles" | "KiloWhPerKm" | "KiloWhPerMile" | "KmPerKiloWh" | "KmPerLitersE" | "LitersEPer100Km" | "MPGEImperial" | "MPGEUS" | "MilePerKiloWh" | "WhPerKm" | "WhPerMile";
export type FuelEconomyUnit = "GallonPer100Km" | "KmPerGallon" | "KmPerLiter" | "LitersPer100Km" | "MPGImperial" | "MPGUS";
export type ZoneDisplayMode = "All" | "Default" | "None";

export interface User extends Entity {
	acceptedEULA:                number;
	activeDashboardReports:      any[];
	activeDefaultDashboards: 	 any[]
	activeFrom:					 string;
	activeTo:        	         string;
	authorityAddress:            string;
	authorityName:               string;
	availableDashboardReports:   any[];
	bookmarks: string[]
	cannedResponseOptions:       any[];
	carrierNumber:               string;
	changePassword:              boolean;
	comment:                     string;
	companyAddress:              string;
	companyGroups:               Group[];
	companyName:                 string;
	countryCode:                 string;
	dateFormat:                  string;
	defaultGoogleMapStyle: GoogleMapStyle
	defaultHereMapStyle: GoogleMapStyle
	defaultMapEngine: MapEngine
	defaultOpenStreetMapStyle: OpenStreetMapStyle
	defaultPage:                 string;
	designation:                 string;

	displayCurrency: any
	driveGuideVersion:           number;
	electricEnergyEconomyUnit: ElectricEnergyEconomyUnit
	employeeNo:                  string;

	featurePreview: string
	firstDayOfWeek:              string;
	firstName:                   string;
	fuelEconomyUnit: FuelEconomyUnit
	hosRuleSet:                  string;

	isAdverseDrivingEnabled: boolean
	isDriver: boolean
	isEmailReportEnabled:        boolean;
	isEULAAccepted:              boolean;
	isExemptHOSEnabled:          boolean;
	isLabsEnabled:               boolean;
	isMetric:                    boolean;
	isNewsEnabled:               boolean;
	isPersonalConveyanceEnabled: boolean;
	isServiceUpdatesEnabled:     boolean;
	isYardMoveEnabled:           boolean;

	jobPriorities: any[]
	language:                    string;
	lastAccessDate: 			 string;
	lastName:                    string;

	maxPCDistancePerDay: number
	mapViews:                    MapView[];

	mediaFiles: MediaFile[]
	name:                        string;
	phoneNumber:                 string;
	phoneNumberExtension:        string;
	privateUserGroups: 			 Group[];
	reportGroups:                Group[];
	securityGroups:              Group[];
	showClickOnceWarning:        boolean;
	timeZoneId:                  string;
	userAuthenticationType:	 	 UserAuthenticationType;

	version: string
	wifiEULA:                    number;
	zoneDisplayMode: ZoneDisplayMode;
}

export interface MapView {
	name:            string;
	viewport:        Viewport;
	highlightGroups: any[];
}

export interface Viewport {
	x:      number;
	y:      number;
	width:  number;
	height: number;
}
