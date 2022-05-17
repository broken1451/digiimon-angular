import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsComponent } from './digimons.component';

describe('DigimonsComponent', () => {
  let component: DigimonsComponent;
  let fixture: ComponentFixture<DigimonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
