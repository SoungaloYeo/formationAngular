import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VilleRoutingModule } from './ville-routing.module';
import { VilleComponent } from './ville.component';

@NgModule({
  declarations: [
    VilleComponent
  ],
  imports: [
    CommonModule,
    VilleRoutingModule
  ]
})
export class VilleModule { }
