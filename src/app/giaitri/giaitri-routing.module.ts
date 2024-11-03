import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiaitriPage } from './giaitri.page';

const routes: Routes = [
  {
    path: '',
    component: GiaitriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiaitriPageRoutingModule {}
