import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DongvatPageRoutingModule } from './dongvat-routing.module';

import { DongvatPage } from './dongvat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DongvatPageRoutingModule
  ],
  declarations: [DongvatPage]
})
export class DongvatPageModule {}
