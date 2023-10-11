import { BaseCall } from "../index.js"
import { DateRangeSearch } from "./dateRangeSearch.js"
import { Entity } from "./entity.js"
import { EntitySearch } from "./entitySearch.js"
import { Group, GroupEntitySearch } from "./group.js"
import { BoundingBox } from "./trip.js"
import { ZoneTypeEntitySearch } from "./zoneType.js"

export type ZoneCall = {
	typeName: "Zone"
}

export type ZoneSetCall = ZoneCall & {
	entity: Zone
}

export interface ZoneSearch extends EntitySearch, DateRangeSearch, GroupEntitySearch, ZoneTypeEntitySearch {
    externalReference?: string
    includeGroups?: string
    keywords?: string
    minimumRadiusInMeters?: any
    name?: string
    searchArea?: BoundingBox
}

export type ZoneGetCall = ZoneCall & BaseCall & { search: ZoneSearch }

export type ZoneEntitySearch = { deviceSearch?: Pick<ZoneSearch, "id"> }

export interface Zone extends Entity {
  id: string
  activeFrom: string
  activeTo: string
  displayed: boolean
  externalReference: string
  fillColor: FillColor
  mustIdentifyStops: boolean
  name: string
  points: Point[]
  zoneTypes: any[]
  groups: Group[]
}

export interface FillColor {
  a: number
  b: number
  g: number
  r: number
}

export interface Point {
  x: number
  y: number
}