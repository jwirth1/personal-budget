import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GuitarComponent } from './guitar/guitar.component';
import { DrumComponent } from './drum/drum.component';
import { BassComponent } from './bass/bass.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GuitarComponent,
    DrumComponent,
    BassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
