import { Group, GroupEntitySearch } from "./group.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { HosRuleSet } from "./HOSRuleSet.js";
import { BaseCall } from "../index.js";

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

export type UserGetCall = UserCall & BaseCall & { search: UserSearch }

export type UserIdSearch = Pick<User,"id">;
export type UserGroupSearch = { groupSearch?: { group: Pick<Group, "id">} }
export type UserEntitySearch = { userSearch?: Pick<UserSearch, "id"> }
export type UserGroupEntitySearch = { userSearch?: UserIdSearch & UserGroupSearch }

export type UserAuthenticationType = "BasicAuthentication" | "MyAdmin" | "SAML";

export interface User extends Entity {
	acceptedEULA:                number;
	activeDashboardReports:      any[];
	activeFrom:                  Date;
	activeTo:                    Date;
	authorityAddress:            string;
	authorityName:               string;
	availableDashboardReports:   any[];
	cannedResponseOptions:       any[];
	carrierNumber:               string;
	changePassword:              boolean;
	comment:                     string;
	companyAddress:              string;
	companyGroups:               Group[];
	companyName:                 string;
	countryCode:                 string;
	dateFormat:                  string;
	defaultGoogleMapStyle:       string;
	defaultHereMapStyle:         string;
	defaultMapEngine:            string;
	defaultOpenStreetMapStyle:   string;
	defaultPage:                 string;
	designation:                 string;
	driveGuideVersion:           number;
	electricEnergyEconomyUnit:   string;
	employeeNo:                  string;
	firstDayOfWeek:              string;
	firstName:                   string;
	fuelEconomyUnit:             string;
	hosRuleSet:                  string;
	isEmailReportEnabled:        boolean;
	isEULAAccepted:              boolean;
	isExemptHOSEnabled:          boolean;
	isLabsEnabled:               boolean;
	isMetric:                    boolean;
	isNewsEnabled:               boolean;
	isPersonalConveyanceEnabled: boolean;
	isServiceUpdatesEnabled:     boolean;
	isYardMoveEnabled:           boolean;
	language:                    string;
	lastAccessDate:              Date;
	lastName:                    string;
	mapViews:                    MapView[];
	name:                        string;
	phoneNumber:                 string;
	phoneNumberExtension:        string;
	privateUserGroups: 			 Group[];
	reportGroups:                Group[];
	securityGroups:              Group[];
	showClickOnceWarning:        boolean;
	timeZoneId:                  string;
	userAuthenticationType:	 	 UserAuthenticationType;
	wifiEULA:                    number;
	zoneDisplayMode:             string;
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
