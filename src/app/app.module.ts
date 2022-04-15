import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModerateComponent } from './moderate/moderate.component';
import { OrdinaryComponent } from './ordinary/ordinary.component';
import { ChomeComponent } from './chome/chome.component';
import { Child1Component } from './moderate/child1/child1.component';
import { Child2Component } from './moderate/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ModerateComponent,
    OrdinaryComponent,
    ChomeComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
