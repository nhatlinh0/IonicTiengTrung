import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BothuhanthuPage } from './bothuhanthu.page';

const routes: Routes = [
  {
    path: '',
    component: BothuhanthuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BothuhanthuPageRoutingModule {}
