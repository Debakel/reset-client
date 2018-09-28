import { Component, OnInit } from '@angular/core';
import {ResetClient} from '../../client/reset.client';

@Component({
  selector: 'app-test-client',
  templateUrl: './test-client.component.html',
  styleUrls: ['./test-client.component.css']
})
export class TestClientComponent implements OnInit {

  socketUrl = 'ws://127.0.0.1:8081';
  message = '';
  resetClient: ResetClient;
  playerName = 'Tom';

  serverLog = [];

  ngOnInit() {

  }

  connect() {
    this.resetClient = new ResetClient(this.socketUrl);
    this.resetClient.socket.onOpen.subscribe(data => this.log('Successfully connected to server.'));
    this.resetClient.socket.onClose.subscribe(data => this.log('Connection closed.'));
    this.resetClient.socket.onMessage.subscribe(data => this.log('Received message: ' + data.data));
    this.resetClient.socket.onError.subscribe(error => this.log('Error: ' + error));
  }

  send() {
    this.log('Send message: ' + this.message);
    this.resetClient.sendRawMessage(this.message);
  }

  join() {
    this.resetClient.join(this.playerName);
  }

  leave() {
    this.resetClient.leave();
  }

  startGame() {
    this.resetClient.startGame();
  }

  log(message) {
    console.log(message);
    this.serverLog = this.serverLog.concat(message);
  }
}
