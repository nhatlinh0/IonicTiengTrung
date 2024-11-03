import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DongvatPage } from './dongvat.page';

const routes: Routes = [
  {
    path: '',
    component: DongvatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DongvatPageRoutingModule {}
