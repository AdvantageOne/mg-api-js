import { BaseGetCall } from "../index.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { Rule } from "./rule.js";

export type DistributionListCall = {
	typeName: "DistributionList"
}

export type DistributionListSetCall = DistributionListCall &{
	entity: DistributionList
}  

export interface DistributionListSearch extends EntitySearch {
}

export type DistributionListGetCall = DistributionListCall & BaseGetCall & { search: DistributionListSearch}

export type Recipient = {
	recipientType: "Email";
	address: string;
	notificationBinaryFile: { id: string };
	user: { id: string };
}

export interface DistributionList extends Entity {
	recipients: Recipient[];
	rules: Partial<Rule>[];
	name: string
}
