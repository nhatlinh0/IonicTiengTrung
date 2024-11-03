import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BothuhanthuPageRoutingModule } from './bothuhanthu-routing.module';

import { BothuhanthuPage } from './bothuhanthu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BothuhanthuPageRoutingModule
  ],
  declarations: [BothuhanthuPage]
})
export class BothuhanthuPageModule {}
