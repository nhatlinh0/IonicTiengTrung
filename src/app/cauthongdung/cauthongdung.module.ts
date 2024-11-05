import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CauthongdungPageRoutingModule } from './cauthongdung-routing.module';

import { CauthongdungPage } from './cauthongdung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CauthongdungPageRoutingModule
  ],
  declarations: [CauthongdungPage]
})
export class CauthongdungPageModule {}
