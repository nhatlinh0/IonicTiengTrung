import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bothuhanthu',
    loadChildren: () => import('./bothuhanthu/bothuhanthu.module').then( m => m.BothuhanthuPageModule)
  },
  {
    path: 'hoctuvung',
    loadChildren: () => import('./hoctuvung/hoctuvung.module').then( m => m.HoctuvungPageModule)
  },
  {
    path: 'camxuc',
    loadChildren: () => import('./camxuc/camxuc.module').then( m => m.CamxucPageModule)
  },
  {
    path: 'giadinh',
    loadChildren: () => import('./giadinh/giadinh.module').then( m => m.GiadinhPageModule)
  },
  {
    path: 'giaitri',
    loadChildren: () => import('./giaitri/giaitri.module').then( m => m.GiaitriPageModule)
  },
  {
    path: 'phongcanh',
    loadChildren: () => import('./phongcanh/phongcanh.module').then( m => m.PhongcanhPageModule)
  },
  {
    path: 'thethao',
    loadChildren: () => import('./thethao/thethao.module').then( m => m.ThethaoPageModule)
  },
  {
    path: 'thoigian',
    loadChildren: () => import('./thoigian/thoigian.module').then( m => m.ThoigianPageModule)
  },
  {
    path: 'traicay',
    loadChildren: () => import('./traicay/traicay.module').then( m => m.TraicayPageModule)
  },
  {
    path: 'vanphong',
    loadChildren: () => import('./vanphong/vanphong.module').then( m => m.VanphongPageModule)
  },
  {
    path: 'douong',
    loadChildren: () => import('./douong/douong.module').then( m => m.DouongPageModule)
  },
  {
    path: 'dongvat',
    loadChildren: () => import('./dongvat/dongvat.module').then( m => m.DongvatPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}