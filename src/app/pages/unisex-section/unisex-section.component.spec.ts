import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnisexSectionComponent } from './unisex-section.component';

describe('UnisexSectionComponent', () => {
  let component: UnisexSectionComponent;
  let fixture: ComponentFixture<UnisexSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnisexSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnisexSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
