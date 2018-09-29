import {ICommand, JoinCommand, LeaveCommand, StartGameCommand} from './commands';
import {WebSocketClient} from './websocket.client';
import {EventEmitter, Injectable} from '@angular/core';
import {
  ActionTypeModel,
  PlayerModel,
  ResourceTypeModel,
  Store,
  TerrainTypeModel,
  UnitModel,
  UnitTypeModel
} from './models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetClient {
  public socket: WebSocketClient; // TODO: Set private

  public eventConnected: EventEmitter<null> = new EventEmitter();
  public eventGameStart: EventEmitter<null> = new EventEmitter();
  public eventPlayerJoin: EventEmitter<PlayerModel> = new EventEmitter<PlayerModel>();
  public eventUnitCreate: EventEmitter<UnitModel> = new EventEmitter<UnitModel>();
  public infoUnitType: EventEmitter<UnitTypeModel> = new EventEmitter<UnitTypeModel>();
  public infoTerrainType: EventEmitter<TerrainTypeModel> = new EventEmitter<TerrainTypeModel>();
  public infoRessourceType: EventEmitter<ResourceTypeModel> = new EventEmitter<ResourceTypeModel>();
  public infoActionType: EventEmitter<ActionTypeModel> = new EventEmitter<ActionTypeModel>();

  constructor() {
    this.socket = new WebSocketClient(environment.socketUrl);
    this.socket.onOpen.subscribe(event => this.eventConnected.emit());
    this.socket.onMessage.subscribe(message => this.parseMessage(message.data));
  }

  join(playerName: string) {
    this.send(new JoinCommand(playerName));
  }

  leave() {
    this.send(new LeaveCommand());
  }

  startGame() {
    this.send(new StartGameCommand());
  }

  public sendRawMessage(message: string) {
    this.socket.send(message);
  }


  private send(command: ICommand) {
    this.socket.send(command.serialize());
  }

  private parseMessage(message: any) {
    message = JSON.parse(message);
    for (const key in message) {
      const value = message[key];

      switch (key) {
        case 'eventPlayerJoin': {
          this.eventPlayerJoin.emit(PlayerModel.deserialize(value));
          break;
        }
        case 'eventUnitCreate': {
          this.eventUnitCreate.emit(UnitModel.deserialize(value));
          break;
        }
        case 'infoUnitType': {
          this.infoUnitType.emit(UnitTypeModel.deserialize(value));
          break;
        }
        case 'eventGameStart': {
          this.eventGameStart.emit();
          break;
        }
        case 'infoTerrainType': {
          this.infoTerrainType.emit(TerrainTypeModel.deserialize(value));
          break;
        }
        case 'infoResourceType': {
          this.infoRessourceType.emit(ResourceTypeModel.deserialize(value));
        }
        case 'infoActionType': {
          this.infoActionType.emit(ActionTypeModel.deserialize(value));
        }
        default : {
          console.log('Unknown command: ' + key);
        }
      }
    }
  }
}

