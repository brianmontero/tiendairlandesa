import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujeresSectionComponent } from './mujeres-section.component';

describe('MujeresSectionComponent', () => {
  let component: MujeresSectionComponent;
  let fixture: ComponentFixture<MujeresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MujeresSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MujeresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
