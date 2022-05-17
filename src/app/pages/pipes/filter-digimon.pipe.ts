import { Pipe, PipeTransform } from '@angular/core';
import { DigimonInterface } from '../models/digimon.interface';

@Pipe({
  name: 'filterDigimon'
})
export class FilterDigimonPipe implements PipeTransform {

  transform(digimons: DigimonInterface[], page: number = 0, termino: string = ''): DigimonInterface[] {
    if (termino.length === 0) {
      return digimons?.slice(page, page + 6)
    }

    const digimonsFiltrados = digimons.filter(digi => {
      return digi.name.includes(termino)
    })

    if (digimonsFiltrados.length == 0) {
      return []
    }

    return digimonsFiltrados.slice(page, page + 6)
  }

}
