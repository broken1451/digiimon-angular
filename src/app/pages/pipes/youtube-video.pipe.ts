import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeVideo'
})
export class YoutubeVideoPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: string ) {
    let url = 'https://www.youtube.com/embed/';
    // console.log('url del pipe youtube: ', url);
    // console.log('value del pipe youtube: ', value);

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
