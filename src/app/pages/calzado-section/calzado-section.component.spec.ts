import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadoSectionComponent } from './calzado-section.component';

describe('CalzadoSectionComponent', () => {
  let component: CalzadoSectionComponent;
  let fixture: ComponentFixture<CalzadoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalzadoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalzadoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
