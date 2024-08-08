import { Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta1/pregunta1.component';
import { Pregunta2Component } from './pregunta2/pregunta2.component';
import { Pregunta3Component } from './pregunta3/pregunta3.component';

export const routes: Routes = [
  { path: 'Pre1', component: Pregunta1Component },
  { path: 'Pre2', component: Pregunta2Component },
  { path: 'Pre3', component: Pregunta3Component },
  { path: '', redirectTo: '/Pre1', pathMatch: 'full' }
];
