import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  // { path: 'public', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) },
  // { path: 'private', loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
