import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CauthongdungPage } from './cauthongdung.page';

const routes: Routes = [
  {
    path: '',
    component: CauthongdungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CauthongdungPageRoutingModule {}
