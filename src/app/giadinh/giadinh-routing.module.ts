import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiadinhPage } from './giadinh.page';

const routes: Routes = [
  {
    path: '',
    component: GiadinhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiadinhPageRoutingModule {}
