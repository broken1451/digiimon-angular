import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../services/digimon.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DigimonInterface } from '../models/digimon.interface';
import { FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public digimons!: DigimonInterface[];
  public digimon!: DigimonInterface;
  public lvls: any[] = []
  public lvlsNoRepeat: any[] = []
  public form!: FormGroup;
  public page: number = 0;
  public loading!: boolean;
  public digimonSearch!: boolean;


  constructor(public digimonService: DigimonService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      typeDigimon: ['']
    });

    this.getAllDigimons().subscribe(digimons => {
      digimons.forEach((lvl) => {
        this.lvls.push(lvl.level)
      })
      this.lvlsNoRepeat = this.removeDuplicates(this.lvls)
    })
  }

  getAllDigimons(): Observable<DigimonInterface[]> {
    return this.digimonService.getDigimons();
  }

  removeDuplicates(arr: any) {
    return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
  }


  onChangeSelectLvl(event: any) {
    this.digimonService.getDigimonsByLvl(event.target.value)?.subscribe((digiLvl: DigimonInterface[]) => {
      this.digimons = digiLvl;
    })
  }

  recibeInfoDigimon(event: DigimonInterface) {
    this.digimon = event;
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
}
