import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzahutComponent } from './pizzahut.component';

describe('PizzahutComponent', () => {
  let component: PizzahutComponent;
  let fixture: ComponentFixture<PizzahutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzahutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzahutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
