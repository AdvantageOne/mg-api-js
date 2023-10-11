import { BaseGetCall } from "../index.js";
import { DateRangeSearch } from "./dateRangeSearch.js";
import { DeviceEntitySearch } from "./device.js";
import { DeviceEntity } from "./deviceEntity.js";
import { Driver, DriverGroupEntitySearch } from "./driver.js";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { TagEntitySearch } from "./tag.js";

export type MediaFileCall = {
	typeName: "MediaFile"
}

export type MediaFileSetCall = MediaFileCall & {
	entity: MediaFile
}

export interface MediaFileSearch extends EntitySearch, DateRangeSearch, DeviceEntitySearch, DriverGroupEntitySearch, TagEntitySearch {
    solutionId?: string
}

export type MediaFileGetCall = MediaFileCall & BaseGetCall & { search: MediaFileSearch }

export type MediaFileEntitySearch = { deviceSearch?: Pick<MediaFileSearch, "id"> }

export type MediaType = "Application" | "Image" | "Unknown" | "Video";
export type MediaFileStatus = "NoFile" | "Processing" | "Ready" | "Unknown";

export interface MediaFile extends Entity, DeviceEntity {
    driver: Driver
    fromDate: string
    mediaType: MediaType
    metaData: any
    solutionId: string
    status: MediaFileStatus
    tags: string[]
    thumbnails: string[]
    toDate: string
    version: string
    name: string
}