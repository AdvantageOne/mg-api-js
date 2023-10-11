import { BaseGetCall } from "../index.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { Driver } from "./driver.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { UserEntitySearch } from "./user.js";

export type AnnotationLogCall = {
	typeName: "Annotation"
}

export type AnnotationLogSetCall = AnnotationLogCall & {
	entity: AnnotationLog
}

export interface AnnotationLogSearch extends EntitySearch, DateRangeSearch, UserEntitySearch {
    comment?: string
}

export type AnnotationLogGetCall = AnnotationLogCall & BaseGetCall & { search: AnnotationLogSearch }

export interface AnnotationLog extends Entity {
    comment: string
    dateTime: string
    driver: Driver
    version: string
}