
export class PlayerModel {
  constructor(readonly playerId: number, readonly name: string) {
  }

  static deserialize(json: any) {
    return new PlayerModel(json.playerId, json.name);
  }
}

export class Store {
  private static _instance: Store;
  users: PlayerModel[] = [];

  public static instance() {
    if (!Store._instance) Store._instance = new Store();
    return Store._instance;
  }
}

export class TerrainTypeModel {
  constructor(readonly id: number, readonly name: string, readonly description: string, readonly tags: string[]) {
  }

  static deserialize(json: any): TerrainTypeModel {
    return new TerrainTypeModel(json.terrainTypeId, json.terrainType.name, json.terrainType.description, json.terrainType.tags);
  }
}

export class ResourceTypeModel {
  constructor(readonly id: number, name: string, description: string) {
  }

  static deserialize(json: any): ResourceTypeModel {
    return new ResourceTypeModel(json.resourceTypeId, json.resourceType.name, json.resourceType.description);
  }
}

export class PositionModel {
  constructor(readonly x, readonly y) {
  }

  static deserialize(json): PositionModel {
    return new PositionModel(json.x, json.y);
  }
}

export class UnitModel {
  constructor(readonly unitId: number, readonly playerId: number, readonly unitTypeId: number, readonly position: PositionModel) {
  }

  static deserialize(json): UnitModel {
    return new UnitModel(json.unitId, json.playerId, json.unitTypeId, PositionModel.deserialize(json.position));
  }
}

export class UnitTypeModel {
  constructor(readonly id, readonly name, readonly description, readonly defaultActionTypeId, readonly tags: string[]) {
  }

  static deserialize(json): UnitTypeModel {
    return new UnitTypeModel(json.unitTypeId, json.unitType.name, json.unitType.description, json.unitType.defaultActionTypeId, json.unitType.tags);
  }
}

export class ActionTypeModel {
  /*
  Received message: { "infoActionType": { "actionTypeId": 1,
  "actionType": { "name": "citizen_farm_wood", "description": "Cut down trees", "unitTypeId": 4, "duration": 2.0, "defaultMode": "ONCE", "targetType": "UNIT",
  "targetTags": [ "resource_wood" ] } } }
   */

  constructor(readonly id,
              readonly name,
              readonly description,
              readonly unitTypeId,
              readonly duration,
              readonly defaultMode,
              readonly targetType,
              readonly targetTags){}

  static deserialize(json) {
    return new ActionTypeModel(
      json.actionTypeId,
      json.actionType.name,
      json.actionType.description,
      json.actionType.unitTypeId,
      json.actionType.duration,
      json.actionType.defaultMode,
      json.actionType.targetType,
      json.actionType.targetTags)
  }
}

