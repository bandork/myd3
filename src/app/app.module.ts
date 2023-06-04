import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { Myd3Component } from './myd3/myd3.component';
import { Myd3chartComponent } from './myd3chart/myd3chart.component';
import { Timeline1Component } from './timeline1/timeline1.component';

const routes: Routes = [
  { path: 'myd3', component: Myd3Component },
  { path: 'myd3chart', component: Myd3chartComponent},
  { path: 'timeline1', component: Timeline1Component},
  { path: '', redirectTo: '/myd3', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    Myd3Component,
    Myd3chartComponent,
    Timeline1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
