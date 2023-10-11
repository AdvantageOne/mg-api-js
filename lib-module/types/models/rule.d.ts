import { Group } from "./group.js";
import { Color } from "./color.js";
import { Diagnostic } from "./diagnostic.js";
import { Entity } from "./entity.js";
import { BaseCall } from "../index.js";
import { EntitySearch } from "./entitySearch.js";

export type ExceptionRuleBaseType = "Custom" | "Stock" | "ZoneStop";
export type ExceptionRuleCategory = "ApplicationExceptionRule" | "UserExceptionRules" | "ZoneStopExceptionRules";

export type RuleCall = {
	typeName: "Rule"
}

export type RuleSetCall = RuleCall &{
	entity: Rule
}  

export interface RuleSearch extends EntitySearch {
	baseType?: ExceptionRuleBaseType;
	category?: ExceptionRuleCategory;
	groups?: Pick<Group, "id">[];
	name?: string;
}

export type RuleGetCall = RuleCall & BaseCall & { search: RuleSearch}

export interface RuleEntitySearch {
	ruleSearch?: Pick<Rule, "id">
}

export interface Rule extends Entity {
	activeFrom?: string;
	activeTo?: string;
	baseType?: ExceptionRuleBaseType;
	color?: Color;
	comment?: string;
	condition?: Condition;
	name?: string;
	groups?: Group[];
	version?: string;
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

