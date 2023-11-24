import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDispenserComponent } from './card-dispenser/card-dispenser.component';
import { MatDialogModule } from '@angular/material/dialog';
import { YellowCardComponent } from './yellow-card/yellow-card.component';
import { RedCardComponent } from './red-card/red-card.component';
import { GreenCardComponent } from './green-card/green-card.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';


@NgModule({
  declarations: [
    AppComponent,
    CardDispenserComponent,
    YellowCardComponent,
    RedCardComponent,
    GreenCardComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
