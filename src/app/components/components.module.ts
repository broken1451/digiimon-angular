import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DigimonsComponent } from './digimons/digimons.component';
import { PipesModule } from '../pages/pipes/pipes.module';
import { FilterDigimonPipe } from '../pages/pipes/filter-digimon.pipe';
import { ModalDigimonComponent } from './modal-digimon/modal-digimon.component';
import { NameDigimonComponent } from './name-digimon/name-digimon.component';


@NgModule({
  declarations: [
    DigimonsComponent,
    ModalDigimonComponent,
    NameDigimonComponent,
  ],
  exports: [DigimonsComponent, ModalDigimonComponent, NameDigimonComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
