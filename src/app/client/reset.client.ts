import {ICommand, JoinCommand, LeaveCommand, StartGameCommand} from './commands';
import {WebSocketClient} from './websocket.client';


export class ResetClient {
  public socket: WebSocketClient; // TODO: Set private

  constructor(socketUrl: string) {
    this.socket = new WebSocketClient(socketUrl);
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
}

