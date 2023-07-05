import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // https://angular.io/guide/http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SelfiesModule } from './features/selfies/selfies.module';
import { WookieesModule } from './features/wookiees/wookiees.module';
import { PromiseVsObservableComponent } from './learnings/promise-vs-observable/promise-vs-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SelfiesModule,
    WookieesModule,
    PromiseVsObservableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
