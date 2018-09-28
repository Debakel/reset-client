import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WebsocketClient} from './websocket.client';

// DO NOT: import * as WebSocket from 'ws';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  socketUrl = 'ws://127.0.0.1:8081';
  message = '';
  client: WebsocketClient;

  serverLog = [];
  ngOnInit() {

  }

  connect() {
    this.client = new WebsocketClient(this.socketUrl);
    this.client.onOpen.subscribe(data => this.log('Successfully conntected to server.'));
    this.client.onClose.subscribe(data => this.log('Connection closed. ' + data));
    this.client.onMessage.subscribe(data => this.log('Received message: ' + data.data));
    this.client.onError.subscribe(error => this.log('Error: ' + error));
  }

  send() {
    this.log('Send message: ' + this.message);
    this.client.send(this.message);
  }

  log(message) {
    console.log(message);
    this.serverLog = this.serverLog.concat(message);
  }
}


