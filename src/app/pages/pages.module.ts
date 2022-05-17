import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { FilterDigimonPipe } from './pipes/filter-digimon.pipe';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NameDigimonComponent } from './name-digimon/name-digimon.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DetailComponent,
    NameDigimonComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
