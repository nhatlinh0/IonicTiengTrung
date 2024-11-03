import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraicayPageRoutingModule } from './traicay-routing.module';

import { TraicayPage } from './traicay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraicayPageRoutingModule
  ],
  declarations: [TraicayPage]
})
export class TraicayPageModule {}
