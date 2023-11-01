import { Group } from "./group.js";
import { User, UserEntitySearch, UserGroupEntitySearch } from "./user.js";

export type DriverEntitySearch = UserEntitySearch;
export type DriverGroupEntitySearch = UserGroupEntitySearch

export interface Driver extends User {
    driverGroups: Pick<Group, "id">[];
    keys: string[]
    licenseNumber: string
    licenseProvince: string
    viewDriversOwnDataOnly: boolean
}