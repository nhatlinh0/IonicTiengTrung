import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanphongPage } from './vanphong.page';

const routes: Routes = [
  {
    path: '',
    component: VanphongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanphongPageRoutingModule {}
