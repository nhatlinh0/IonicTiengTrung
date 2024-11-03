import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiadinhPageRoutingModule } from './giadinh-routing.module';

import { GiadinhPage } from './giadinh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiadinhPageRoutingModule
  ],
  declarations: [GiadinhPage]
})
export class GiadinhPageModule {}
