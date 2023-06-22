import { Entity } from "./entity";

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
