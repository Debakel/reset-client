## Events

  { "eventPlayerJoin": { "playerId": 6, "name": "Player" } }

## Commands

  {
    "join": {"name": "Bob"}
  }
  
  {"leave": {}}
  
  {"game_start": {}}

## 



Received message: { "eventPlayerJoin": { "playerId": 1, "name": "Tom" } }
Received message: { "infoTerrainType": { "terrainTypeId": 1, "terrainType": { "name": "grass", "description": "Grass", "tags": [ "walk", "build" ] } } }
Received message: { "infoTerrainType": { "terrainTypeId": 2, "terrainType": { "name": "mountain", "description": "Mountains" } } }
Received message: { "infoTerrainType": { "terrainTypeId": 3, "terrainType": { "name": "water", "description": "Water", "tags": [ "water" ] } } }
Received message: { "infoResourceType": { "resourceTypeId": 1, "resourceType": { "name": "wood", "description": "Wood" } } }
Received message: { "infoResourceType": { "resourceTypeId": 2, "resourceType": { "name": "food", "description": "Food" } } }
Received message: { "infoResourceType": { "resourceTypeId": 3, "resourceType": { "name": "stone", "description": "Stone" } } }
Received message: { "infoUnitType": { "unitTypeId": 1, "unitType": { "name": "forest", "description": "Forest", "defaultActionTypeId": 0, "tags": [ "resource_wood", "resource" ] } } }
Received message: { "infoUnitType": { "unitTypeId": 2, "unitType": { "name": "quarry", "description": "Quarry", "defaultActionTypeId": 0, "tags": [ "resource_quarry", "resource" ] } } }
Received message: { "infoUnitType": { "unitTypeId": 3, "unitType": { "name": "city", "description": "City", "defaultActionTypeId": 0, "tags": [ "building" ] } } }
Received message: { "infoUnitType": { "unitTypeId": 4, "unitType": { "name": "citizen", "description": "Citizen", "defaultActionTypeId": 0 } } }
Received message: { "infoActionType": { "actionTypeId": 1, "actionType": { "name": "citizen_farm_wood", "description": "Cut down trees", "unitTypeId": 4, "duration": 2.0, "defaultMode": "ONCE", "targetType": "UNIT", "targetTags": [ "resource_wood" ] } } }
Received message: { "infoActionType": { "actionTypeId": 2, "actionType": { "name": "city_create_citizen", "description": "Create a Citizen", "unitTypeId": 3, "cost": [ { "resourceTypeId": 2, "amount": 20 } ], "duration": 2.0, "defaultMode": "ONCE", "targetType": "NONE" } } }
Received message: { "eventGameStart": {} }
Received message: { "eventUnitCreate": { "unitId": 1, "playerId": 0, "unitTypeId": 2, "position": { "x": 0, "y": 6 } } }
Received message: { "eventUnitCreate": { "unitId": 2, "playerId": 0, "unitTypeId": 1, "position": { "x": 0, "y": 7 } } }
Received message: { "eventUnitCreate": { "unitId": 3, "playerId": 0, "unitTypeId": 2, "position": { "x": 0, "y": 13 } } }
Received message: { "eventUnitCreate": { "unitId": 4, "playerId": 0, "unitTypeId": 1, "position": { "x": 1, "y": 2 } } }
Received message: { "eventUnitCreate": { "unitId": 5, "playerId": 0, "unitTypeId": 1, "position": { "x": 1, "y": 11 } } }
Received message: { "eventUnitCreate": { "unitId": 6, "playerId": 0, "unitTypeId": 1, "position": { "x": 1, "y": 16 } } }
Received message: { "eventUnitCreate": { "unitId": 7, "playerId": 0, "unitTypeId": 1, "position": { "x": 4, "y": 3 } } }
Received message: { "eventUnitCreate": { "unitId": 8, "playerId": 0, "unitTypeId": 1, "position": { "x": 4, "y": 8 } } }
Received message: { "eventUnitCreate": { "unitId": 9, "playerId": 0, "unitTypeId": 2, "position": { "x": 5, "y": 8 } } }
Received message: { "eventUnitCreate": { "unitId": 10, "playerId": 0, "unitTypeId": 2, "position": { "x": 6, "y": 7 } } }
Received message: { "eventUnitCreate": { "unitId": 11, "playerId": 0, "unitTypeId": 1, "position": { "x": 6, "y": 10 } } }
Received message: { "eventUnitCreate": { "unitId": 12, "playerId": 0, "unitTypeId": 2, "position": { "x": 6, "y": 12 } } }
Received message: { "eventUnitCreate": { "unitId": 13, "playerId": 0, "unitTypeId": 2, "position": { "x": 7, "y": 4 } } }
Received message: { "eventUnitCreate": { "unitId": 14, "playerId": 0, "unitTypeId": 2, "position": { "x": 7, "y": 11 } } }
Received message: { "eventUnitCreate": { "unitId": 15, "playerId": 0, "unitTypeId": 1, "position": { "x": 7, "y": 14 } } }
Received message: { "eventUnitCreate": { "unitId": 16, "playerId": 0, "unitTypeId": 2, "position": { "x": 8, "y": 3 } } }
Received message: { "eventUnitCreate": { "unitId": 17, "playerId": 0, "unitTypeId": 2, "position": { "x": 8, "y": 6 } } }
Received message: { "eventUnitCreate": { "unitId": 18, "playerId": 0, "unitTypeId": 1, "position": { "x": 8, "y": 9 } } }
Received message: { "eventUnitCreate": { "unitId": 19, "playerId": 0, "unitTypeId": 2, "position": { "x": 8, "y": 10 } } }
Received message: { "eventUnitCreate": { "unitId": 20, "playerId": 0, "unitTypeId": 2, "position": { "x": 8, "y": 15 } } }
Received message: { "eventUnitCreate": { "unitId": 21, "playerId": 0, "unitTypeId": 2, "position": { "x": 8, "y": 16 } } }
Received message: { "eventUnitCreate": { "unitId": 22, "playerId": 0, "unitTypeId": 2, "position": { "x": 9, "y": 14 } } }
Received message: { "eventUnitCreate": { "unitId": 23, "playerId": 0, "unitTypeId": 1, "position": { "x": 9, "y": 15 } } }
Received message: { "eventUnitCreate": { "unitId": 24, "playerId": 0, "unitTypeId": 2, "position": { "x": 10, "y": 3 } } }
Received message: { "eventUnitCreate": { "unitId": 25, "playerId": 0, "unitTypeId": 2, "position": { "x": 10, "y": 8 } } }
Received message: { "eventUnitCreate": { "unitId": 26, "playerId": 0, "unitTypeId": 2, "position": { "x": 10, "y": 13 } } }
Received message: { "eventUnitCreate": { "unitId": 27, "playerId": 0, "unitTypeId": 2, "position": { "x": 11, "y": 2 } } }
Received message: { "eventUnitCreate": { "unitId": 28, "playerId": 0, "unitTypeId": 2, "position": { "x": 11, "y": 7 } } }
Received message: { "eventUnitCreate": { "unitId": 29, "playerId": 0, "unitTypeId": 2, "position": { "x": 11, "y": 13 } } }
Received message: { "eventUnitCreate": { "unitId": 30, "playerId": 0, "unitTypeId": 2, "position": { "x": 12, "y": 13 } } }
Received message: { "eventUnitCreate": { "unitId": 31, "playerId": 0, "unitTypeId": 2, "position": { "x": 12, "y": 19 } } }
Received message: { "eventUnitCreate": { "unitId": 32, "playerId": 0, "unitTypeId": 2, "position": { "x": 13, "y": 0 } } }
Received message: { "eventUnitCreate": { "unitId": 33, "playerId": 0, "unitTypeId": 2, "position": { "x": 13, "y": 5 } } }
Received message: { "eventUnitCreate": { "unitId": 34, "playerId": 0, "unitTypeId": 2, "position": { "x": 13, "y": 10 } } }
Received message: { "eventUnitCreate": { "unitId": 35, "playerId": 0, "unitTypeId": 1, "position": { "x": 13, "y": 18 } } }
Received message: { "eventUnitCreate": { "unitId": 36, "playerId": 0, "unitTypeId": 1, "position": { "x": 14, "y": 2 } } }
Received message: { "eventUnitCreate": { "unitId": 37, "playerId": 0, "unitTypeId": 2, "position": { "x": 14, "y": 4 } } }
Received message: { "eventUnitCreate": { "unitId": 38, "playerId": 0, "unitTypeId": 2, "position": { "x": 16, "y": 0 } } }
Received message: { "eventUnitCreate": { "unitId": 39, "playerId": 0, "unitTypeId": 2, "position": { "x": 16, "y": 2 } } }
Received message: { "eventUnitCreate": { "unitId": 40, "playerId": 0, "unitTypeId": 2, "position": { "x": 18, "y": 5 } } }
Received message: { "eventUnitCreate": { "unitId": 41, "playerId": 1, "unitTypeId": 3, "position": { "x": 16, "y": 10 } } }
