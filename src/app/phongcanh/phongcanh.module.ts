import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhongcanhPageRoutingModule } from './phongcanh-routing.module';

import { PhongcanhPage } from './phongcanh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhongcanhPageRoutingModule
  ],
  declarations: [PhongcanhPage]
})
export class PhongcanhPageModule {}
