import { BaseCall } from "..";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";


export type UnitOfMeasureType = "CustomUnitOfMeasure" | "CustomVehicleUnitOfMeasure" | "GO2" | "GO3" | "GO4" | "GO4v3" | "GO5" | "GO6" | "GO7" | "GO8" | "GO9" | "GoDriveUnitOfMeasure" | "None" | "OldGeotab"

export type UnitOfMeasureCall = {
	typeName: "UnitOfMeasure"
}

export type UnitOfMeasureSetCall = UnitOfMeasureCall & {
	entity: UnitOfMeasure
}

export interface UnitOfMeasureSearch extends EntitySearch {
}

export type UnitOfMeasureGetCall = UnitOfMeasureCall & BaseCall & { search: UnitOfMeasureSearch }

export interface UnitOfMeasure extends Entity {
}