import { Entity } from "./entity.js";
import { EntitySearch } from "./entitySearch.js";
import { NameSearch } from "./nameSearch.js";

export interface SourceSearch extends EntitySearch, NameSearch {
}

export interface Source extends Entity {
    name: string
}