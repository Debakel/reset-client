import {PlayerModel} from './models';

export abstract class BaseEvent {
}

export class ConnectedEvent extends BaseEvent {
}

export class GameStartEvent extends BaseEvent {
}

export class PlayerLeavedEvent extends BaseEvent {
}

export class PlayerJoinedEvent extends BaseEvent {
  constructor(readonly player: PlayerModel) {
    super();
  }
}
