import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamxucPage } from './camxuc.page';

const routes: Routes = [
  {
    path: '',
    component: CamxucPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamxucPageRoutingModule {}
