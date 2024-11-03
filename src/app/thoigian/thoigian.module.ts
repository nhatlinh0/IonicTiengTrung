import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThoigianPageRoutingModule } from './thoigian-routing.module';

import { ThoigianPage } from './thoigian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThoigianPageRoutingModule
  ],
  declarations: [ThoigianPage]
})
export class ThoigianPageModule {}
