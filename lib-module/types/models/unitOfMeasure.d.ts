import { BaseGetCall } from "..";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";

export type UnitOfMeasureCall = {
	typeName: "UnitOfMeasure"
}

export type UnitOfMeasureSetCall = UnitOfMeasureCall & {
	entity: UnitOfMeasure
}

export interface UnitOfMeasureSearch extends EntitySearch {
}

export type UnitOfMeasureGetCall = UnitOfMeasureCall & BaseGetCall & { search: UnitOfMeasureSearch }

export interface UnitOfMeasure extends Entity {
}