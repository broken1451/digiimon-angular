import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DigimonService } from '../../pages/services/digimon.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public form!: FormGroup;
  @Input() isNavbar!: boolean;
  public browserRefresh!: boolean;

  get formValues() {
    return this.form?.controls;
  }

  constructor(private digimonService: DigimonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      termino: ['']
    });
  }


  search() {
    this.digimonService.terminoSearch = this.formValues.termino.value.charAt(0).toUpperCase() + this.formValues.termino.value.slice(1).toLowerCase();;
  }

}
