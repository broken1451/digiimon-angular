import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { DigimonInterface } from '../models/digimon.interface';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  public terminoSearch!: string;

  constructor(private httpClient: HttpClient) { }


  public getDigimons(): any {
    try {
      return this.httpClient
        .get<DigimonInterface[]>(`${environment.url}/digimon`)
        .pipe(map(digimons => {

          return digimons;
        }));
    } catch (error) {
      console.log({ error })
    }
  }

  public getDigimonsByName(name: string): any {
    try {
      return this.httpClient
        .get<DigimonInterface>(`${environment.url}/digimon/name/${name}`)
        .pipe(map((digimon) => {
          return digimon;
        }));
    } catch (error) {
      console.log({ error })
    }
  }

  public getDigimonsByLvl(lvl: string): any {
    try {
      return this.httpClient
        .get<DigimonInterface[]>(`${environment.url}/digimon/level/${lvl}`)
        .pipe(map((digimon) => {
          return digimon;
        }));
    } catch (error) {
      console.log({ error })
    }
  }

}
