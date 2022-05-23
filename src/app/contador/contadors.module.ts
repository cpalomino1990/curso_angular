import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contadorComponent } from './contadors/contador.component';



@NgModule({
  declarations: [
    contadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    contadorComponent
  ]
})
export class ContadorsModule { }
