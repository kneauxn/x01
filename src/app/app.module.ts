import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DartboardComponent } from './dartboard/dartboard.component';
import { GameSelectComponent } from './game-select/game-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DartboardComponent,
    GameSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
