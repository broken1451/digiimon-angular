import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NameDigimonComponent } from './name-digimon/name-digimon.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [TokenValidateGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { titulo: 'Home', descrip: 'Esto es pagina home' }
      },
      {
        path: 'digimon-by-lvl',
        component: DetailComponent,
        data: { titulo: 'Detail', descrip: 'Esto es la pagina de detail' }
      },
      {
        path: 'digimon-by-name',
        component: NameDigimonComponent,
        data: { titulo: 'Digimon by name', descrip: 'Esto es la pagina by name' }
      },
      { path: '**', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
