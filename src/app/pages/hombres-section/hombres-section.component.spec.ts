import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombresSectionComponent } from './hombres-section.component';

describe('HombresSectionComponent', () => {
  let component: HombresSectionComponent;
  let fixture: ComponentFixture<HombresSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HombresSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HombresSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
