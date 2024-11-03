import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraicayPage } from './traicay.page';

const routes: Routes = [
  {
    path: '',
    component: TraicayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraicayPageRoutingModule {}
