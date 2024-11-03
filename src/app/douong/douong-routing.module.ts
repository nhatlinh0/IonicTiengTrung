import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DouongPage } from './douong.page';

const routes: Routes = [
  {
    path: '',
    component: DouongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DouongPageRoutingModule {}
