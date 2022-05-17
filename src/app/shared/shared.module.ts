import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PipesModule } from '../pages/pipes/pipes.module';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent,
    NotFoundComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [NavbarComponent, LoadingComponent, NotFoundComponent, PaginationComponent]
})
export class SharedModule { }
