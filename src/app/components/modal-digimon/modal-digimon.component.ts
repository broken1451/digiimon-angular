import { Component, Input, OnInit } from '@angular/core';
import { DigimonInterface } from '../../pages/models/digimon.interface';

@Component({
  selector: 'app-modal-digimon',
  templateUrl: './modal-digimon.component.html',
  styleUrls: ['./modal-digimon.component.scss']
})
export class ModalDigimonComponent implements OnInit {

  @Input() digimon!: DigimonInterface;

  constructor() { }

  ngOnInit(): void {

  }

}
