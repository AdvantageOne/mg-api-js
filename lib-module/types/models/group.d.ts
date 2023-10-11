import { BaseCall } from "../index.js";
import { Color } from "./color.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";


export type GroupCall = {
	typeName: "Group"
}

export type GroupSetCall = GroupCall &{
	entity: Group
}  

export interface GroupSearch extends EntitySearch {
  name?: string
  includeAllTrees?: boolean
  reference?: string
}

export interface GroupEntitySearch {
	groups: Pick<Group, "id">[];
}

export type GroupGetCall = GroupCall & BaseCall & { search: GroupSearch}

export interface Group extends Entity {
	children?: Group[];
	color?: Color;
	comments?: string;
	name?: string;
	reference?: string;
}