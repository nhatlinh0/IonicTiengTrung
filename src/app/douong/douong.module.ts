import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DouongPageRoutingModule } from './douong-routing.module';

import { DouongPage } from './douong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DouongPageRoutingModule
  ],
  declarations: [DouongPage]
})
export class DouongPageModule {}
