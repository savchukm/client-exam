import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDataTableComponent } from './animal-data-table.component';

describe('AnimalDataTableComponent', () => {
  let component: AnimalDataTableComponent;
  let fixture: ComponentFixture<AnimalDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
