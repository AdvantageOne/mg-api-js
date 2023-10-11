import { BaseGetCall } from ".."
import { Entity } from "./entity.js"
import { EntitySearch } from "./entitySearch.js"

export type ZoneTypeCall = {
	typeName: "ZoneType"
}

export type ZoneTypeSetCall = ZoneTypeCall & {
	entity: ZoneType
}

export interface ZoneTypeSearch extends EntitySearch {
    name?: string
}

export type ZoneTypeGetCall = ZoneTypeCall & BaseGetCall & { search: ZoneTypeSearch }

export type ZoneTypeEntitySearch = { zoneTypes?: Pick<ZoneType, "id"> }

export interface ZoneType extends Entity {
    comment: string
    name: string
}