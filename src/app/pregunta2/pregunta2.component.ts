import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [FormsModule, CommonModule], // Incluye FormsModule y CommonModule aquí
  templateUrl: './pregunta2.component.html',
  styleUrls: ['./pregunta2.component.css'],
})
export class Pregunta2Component {
  notas: number[] = [0, 0, 0, 0];
  promedio: number | null = null;
  notaEliminada: number | null = null;

  calcularPromedio() {
    const notasValidas = this.notas.filter(nota => !isNaN(nota));
    
    if (notasValidas.length < 4) {
      alert('Por favor, ingresa cuatro notas válidas.');
      return;
    }

    this.notaEliminada = Math.min(...notasValidas);
    const notasFiltradas = notasValidas.filter(nota => nota !== this.notaEliminada);
    const suma = notasFiltradas.reduce((acc, curr) => acc + curr, 0);
    this.promedio = suma / 3;
  }
}
