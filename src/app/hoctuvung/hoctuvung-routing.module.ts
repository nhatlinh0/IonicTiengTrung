import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoctuvungPage } from './hoctuvung.page';

const routes: Routes = [
  {
    path: '',
    component: HoctuvungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoctuvungPageRoutingModule {}
