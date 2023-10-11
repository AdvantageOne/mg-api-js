import { BaseGetCall } from "..";
import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";


export type TagCall = {
	typeName: "Tag"
}

export type TagSetCall = TagCall & {
	entity: Tag
}

export interface TagSearch extends EntitySearch {
    name?: string
    names?: string[]
    tagIds?: string[]
}

export type TagGetCall = TagCall & BaseGetCall & { search: TagSearch }

export type TagEntitySearch = { tagSearch?: Pick<Tag, "id"> }

export interface Tag extends Entity {
    version?: string
    name: string
}