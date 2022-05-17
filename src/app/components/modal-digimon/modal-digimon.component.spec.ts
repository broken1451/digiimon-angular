import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDigimonComponent } from './modal-digimon.component';

describe('ModalDigimonComponent', () => {
  let component: ModalDigimonComponent;
  let fixture: ComponentFixture<ModalDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
