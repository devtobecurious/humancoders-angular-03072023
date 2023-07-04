import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWookieesComponent } from './list-wookiees/list-wookiees.component';
import { SaveWookieeComponent } from './save-wookiee/save-wookiee.component';



@NgModule({
  declarations: [
    ListWookieesComponent
  ],
  imports: [
    CommonModule,
    SaveWookieeComponent
  ],
  exports: [
    ListWookieesComponent
  ]
})
export class WookieesModule { }
