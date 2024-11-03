import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThethaoPageRoutingModule } from './thethao-routing.module';

import { ThethaoPage } from './thethao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThethaoPageRoutingModule
  ],
  declarations: [ThethaoPage]
})
export class ThethaoPageModule {}
