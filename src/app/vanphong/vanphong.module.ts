import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanphongPageRoutingModule } from './vanphong-routing.module';

import { VanphongPage } from './vanphong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanphongPageRoutingModule
  ],
  declarations: [VanphongPage]
})
export class VanphongPageModule {}
