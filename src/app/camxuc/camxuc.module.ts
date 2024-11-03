import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamxucPageRoutingModule } from './camxuc-routing.module';

import { CamxucPage } from './camxuc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamxucPageRoutingModule
  ],
  declarations: [CamxucPage]
})
export class CamxucPageModule {}
