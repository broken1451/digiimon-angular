import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDigimonComponent } from './name-digimon.component';

describe('NameDigimonComponent', () => {
  let component: NameDigimonComponent;
  let fixture: ComponentFixture<NameDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
