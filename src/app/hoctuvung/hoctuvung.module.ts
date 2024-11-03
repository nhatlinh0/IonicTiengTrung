import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoctuvungPageRoutingModule } from './hoctuvung-routing.module';

import { HoctuvungPage } from './hoctuvung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoctuvungPageRoutingModule
  ],
  declarations: [HoctuvungPage]
})
export class HoctuvungPageModule {}
