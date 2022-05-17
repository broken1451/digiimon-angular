import { Component, Input, OnInit } from '@angular/core';
import { DigimonInterface } from '../../pages/models/digimon.interface';

@Component({
  selector: 'app-name',
  templateUrl: './name-digimon.component.html',
  styleUrls: ['./name-digimon.component.scss']
})
export class NameDigimonComponent implements OnInit {

  @Input() digimon!: DigimonInterface[];
  @Input() idVideo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
