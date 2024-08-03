import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pregunta2Component } from './pregunta2.component';

describe('Pregunta2Component', () => {
  let component: Pregunta2Component;
  let fixture: ComponentFixture<Pregunta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
