import { Color } from "./color.js";
import { Entity } from "./entity.js";

export interface Group extends Entity {
	children?: Group[];
	color?: Color;
	comments?: string;
	name?: string;
	reference?: string;
}