import {Observable} from 'rxjs';

export class WebsocketClient {
  onMessage: Observable<MessageEvent>;
  onOpen: Observable<any>; // TODO: Add type
  onClose: Observable<any>; // TODO: Add type
  onError: Observable<any>; // TODO: Add type

  private socket: WebSocket;

  constructor(url: string) {
    this.socket = new WebSocket(url);

    this.onMessage = new Observable(observer => this.socket.onmessage = (data) => observer.next(data));
    this.onOpen = new Observable(observer => this.socket.onopen = (data) => observer.next(data));
    this.onClose = new Observable(observer => this.socket.onclose = (data) => observer.next(data));
    this.onError = new Observable(observer => this.socket.onerror = (data) => observer.next(data));
  }

  public send(message: string) {
    this.socket.send(message);
  }
}
