import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js/dist/pixi.js';
import {WebsocketClient} from '../websocket.client';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello world on init');
    const app = new PIXI.Application();

    let map = new Array();
    for (let x = 0; x < 20; x++) {
      map[x] = new Array();
    }
    let terrainTypes = [];
    let resourceTypes = [];
    let unitTypes = [];
    let actionTypes = [];

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    document.body.appendChild(app.view);
    // load the texture(s) we need
    PIXI.loader.add('bunny', '/assets/title.png').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      const bunny = new PIXI.Sprite(resources.bunny.texture);

      const client = new WebsocketClient('ws://127.0.0.1:8080');
      const mytext = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
      mytext.setText('connecting?');
      mytext.x = 30;
      mytext.y = 30;
      client.onOpen.subscribe(data => log('Successfully connected to server.'));
      client.onClose.subscribe(data => log('Connection closed. ' + data));
      client.onMessage.subscribe(data => handle(data.data));
      client.onError.subscribe(error => log('Error: ' + error));
      function log(message) {
        console.log(message);
        mytext.setText(message);
      }
      function handle(data) {
        console.log(data);
        data = JSON.parse(data);
        if (data.infoTerrainType) {
          terrainTypes[data.infoTerrainType.terrainTypeId] = data.infoTerrainType.terrainType;
        }
        if (data.infoResourceType) {
          resourceTypes[data.infoResourceType.resourceTypeId] = data.infoResourceType.resourceType;
        }
        if (data.infoUnitType) {
          unitTypes[data.infoUnitType.unitTypeId] = data.infoUnitType.unitType;
        }
        if (data.infoActionType) {
          actionTypes[data.infoActionType.actionTypeId] = data.infoActionType.actionType;
        }
        if (data.hasOwnProperty("eventUnitCreate")) {
          // todo: treat terrain differently from units and resources
          console.log('console.log is the best debugging!');
          const pos = data.eventUnitCreate.position;
          map[pos.x][pos.y] = data.eventUnitCreate.unitTypeId;
          const cell = new PIXI.Text(data.eventUnitCreate.unitTypeId, {fontFamily : 'Arial', fontSize: 10, fill : 0xcccccc, align : 'center'});
          cell.x = pos.x * 50;
          cell.y = pos.y * 50;
          app.stage.addChild(cell);
        } else {
          console.log('this does not resolve to true:',data);
        }

      }

      // Add the bunny to the scene we are building
      app.stage.addChild(mytext);

      // Listen for frame updates


      const container = new PIXI.Container();

      app.stage.addChild(container);


    }
    // load things
    // wait for and render the initial map
    // apply updates?
    // listen for clicks?

  }

}

