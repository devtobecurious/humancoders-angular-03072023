import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';



@NgModule({
  declarations: [
    ListSelfiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListSelfiesComponent
  ]
})
export class SelfiesModule { }
