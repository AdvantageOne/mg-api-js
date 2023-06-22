import { Group } from ".";
import { Diagnostic } from "./diagnostic";
import { Entity } from "./entity";

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

