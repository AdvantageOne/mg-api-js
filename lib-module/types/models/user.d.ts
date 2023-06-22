import { Group } from ".";
import { Entity } from "./entity";

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
	userAuthenticationType:      string;
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
