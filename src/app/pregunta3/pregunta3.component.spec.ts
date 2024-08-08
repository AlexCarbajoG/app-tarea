import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta3Component } from './pregunta3.component';

describe('Pregunta3Component', () => {
  let component: Pregunta3Component;
  let fixture: ComponentFixture<Pregunta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
