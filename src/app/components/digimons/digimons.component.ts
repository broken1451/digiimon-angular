import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DigimonInterface } from '../../pages/models/digimon.interface';
import { Router } from '@angular/router';
import { DigimonService } from 'src/app/pages/services/digimon.service';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.scss']
})
export class DigimonsComponent implements OnInit {

  @Input() digimons!: DigimonInterface[];
  @Input() page!: number;
  @Output() sendInfoDigimon: EventEmitter<DigimonInterface> = new EventEmitter<DigimonInterface>();

  constructor(private router: Router, public digimonService: DigimonService) { }

  ngOnInit(): void {

  }

  sendInfo(digimon: DigimonInterface) {
     this.sendInfoDigimon.emit(digimon)
  }
}
