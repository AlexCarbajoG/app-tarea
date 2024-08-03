import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component {
  salarioForm: FormGroup;
  salario: number | null = null;

  constructor(private fb: FormBuilder) {
    this.salarioForm = this.fb.group({
      horasTrabajadas: [0, [Validators.required, Validators.min(0)]]
    });
  }

  calcularSalario(): void {
    const horasTrabajadas = this.salarioForm.get('horasTrabajadas')?.value;
    const horasNormales = 40;
    const salarioPorHora = 16;
    const salarioPorHoraExtra = 20;

    if (horasTrabajadas <= horasNormales) {
      this.salario = horasTrabajadas * salarioPorHora;
    } else {
      const horasExtras = horasTrabajadas - horasNormales;
      this.salario = (horasNormales * salarioPorHora) + (horasExtras * salarioPorHoraExtra);
    }
  }
}
