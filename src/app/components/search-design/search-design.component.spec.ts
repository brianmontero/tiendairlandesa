import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDesignComponent } from './search-design.component';

describe('SearchDesignComponent', () => {
  let component: SearchDesignComponent;
  let fixture: ComponentFixture<SearchDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
