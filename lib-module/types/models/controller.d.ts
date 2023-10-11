import { Entity } from "./entity.js";

export interface ControllerEntitySearch {
    controllerSearch?: Pick<Controller, "id">
}

export interface ControllerSource extends Entity {
    name: string
}

export interface Controller extends Entity {
    code: number;
    codeId: any
    name: string;
    source: ControllerSource
    version: string
}