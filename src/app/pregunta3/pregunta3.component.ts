import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  segundos: number = 0;
  minutos: number = 0;

  convertirSegundosAMinutos() {
    this.minutos = this.segundos / 60;
  }
}
