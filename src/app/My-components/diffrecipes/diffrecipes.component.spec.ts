import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffrecipesComponent } from './diffrecipes.component';

describe('DiffrecipesComponent', () => {
  let component: DiffrecipesComponent;
  let fixture: ComponentFixture<DiffrecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffrecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
