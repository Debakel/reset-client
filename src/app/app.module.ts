import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GameAreaComponent } from './game-area/game-area.component';
import {TestClientComponent} from './components/test-client/test-client.component';
import {ResetClient} from './client/reset.client';

@NgModule({
  declarations: [
    AppComponent,
    GameAreaComponent,
    TestClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ResetClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
