import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterDigimonPipe } from './filter-digimon.pipe';
import { YoutubeVideoPipe } from './youtube-video.pipe';



@NgModule({
  declarations: [FilterDigimonPipe, YoutubeVideoPipe],
  exports: [FilterDigimonPipe, YoutubeVideoPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
