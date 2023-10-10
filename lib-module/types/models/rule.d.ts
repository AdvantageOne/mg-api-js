import { Group } from "./group.js";
import { Color } from "./color.js";
import { Diagnostic } from "./diagnostic.js";
import { Entity } from "./entity.js";

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

