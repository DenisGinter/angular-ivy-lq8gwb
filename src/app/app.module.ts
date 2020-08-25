import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { EinkaufswaagenComponent } from './einkaufswaagen/einkaufswaagen.component';
import { EinkaufsService } from './einkaufsservice.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
      { path: '', component: HomeComponent },
       { path: 'einkaufswaagen', component: EinkaufswaagenComponent }
      
    ]),
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, EinkaufswaagenComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EinkaufsService]
})
export class AppModule { }
