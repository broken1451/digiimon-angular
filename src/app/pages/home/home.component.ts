import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { Observable } from 'rxjs';
import { DigimonInterface } from '../models/digimon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public digimons: DigimonInterface[] = [];
  public digimon!: DigimonInterface;
  public loading!: boolean;
  public page: number = 0;
  public digimonSearch!: boolean;


  constructor(public digimonService: DigimonService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.getAllDigimons().subscribe(digimons => {
        this.digimons = digimons;
      })
      this.loading = false
    }, 2000);
  }

  getAllDigimons(): Observable<DigimonInterface[]> {
    return this.digimonService.getDigimons();
  }

  // pageEvent(event: number) {
  //   this.page = event;
  // }

  // loadingEvent(event: boolean) {
  //   this.loading = event;
  // }
  
  // digimonSearchEvent(event: boolean) {
  //   this.digimonSearch = event;
  // }

  loadingE(e: any) {
    this.loading = e;
  }


  siguentes() {
    this.page = this.page + 6;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
    this.digimonSearch = true;
  }

  anteriores() {
    if (this.page > 0) {
      this.page = this.page - 5;
    }
    if (this.page <= 0) {
      this.page = 0;
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);

  }


  recibeInfoDigimon(digimon: DigimonInterface) {
    this.digimon = digimon;
  }

}
