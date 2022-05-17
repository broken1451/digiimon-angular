import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DigimonService } from '../services/digimon.service';
import { DigimonInterface } from '../models/digimon.interface';

@Component({
  selector: 'app-name-digimon',
  templateUrl: './name-digimon.component.html',
  styleUrls: ['./name-digimon.component.scss']
})
export class NameDigimonComponent implements OnInit {

  public idVideo!: string;
  public form!: FormGroup;
  public digimonSearch!: boolean;
  public digimon!: any[];

  get formsValue() {
    return this.form.controls;
  }

  constructor(public digimonService: DigimonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.idVideo = '2W6snWRTfOE?start=2'
    this.form = this.fb.group({
      search: ['']
    });
  }

  search() {
    this.digimonService.getDigimonsByName(this.formsValue.search.value).subscribe((res:any) => {
      this.digimon = res;
      this.digimonSearch = false;
    }, ((err: any) => {
      this.digimonSearch = true;
    }))
  }

}
