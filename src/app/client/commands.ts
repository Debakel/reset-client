export interface ICommand {
  command: string;

  serialize();
}

export abstract class BaseCommand implements ICommand {
  command: string;
  payload: any = {};

  getPayload() {
    return this.payload;
  }

  serialize() {
    const data = {};
    data[this.command] = this.getPayload();
    return JSON.stringify(data);
  }
}

export class LeaveCommand extends BaseCommand {
  command = 'leave';
}

export class StartGameCommand extends BaseCommand {
  command = 'game_start';
}

export class JoinCommand extends BaseCommand {
  command = 'join';

  constructor(readonly playerName: string) {
    super();
  }

  getPayload() {
    return {'name': this.playerName};
  }
}
