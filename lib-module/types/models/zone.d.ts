import { Entity } from "./entity.js"
import { Group } from "./group.js"

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