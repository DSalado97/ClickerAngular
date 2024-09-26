import { Injectable } from '@angular/core';
import { Monstruo } from '../models/monstruo';

@Injectable({
  providedIn: 'root'
})
export class MonstruoService {
  monstruoActual: Monstruo;

  constructor() {

    this.monstruoActual = {
      nombre: 'Goblin',
      vida: 10,
      recompensa: 1
    };
    
  }

  spawnNuevoMonstruo() {
    this.monstruoActual = {
      nombre: 'Goblin',
      vida: 10,
      recompensa: 1
    };
  }

  getMonstruoActual() {
    return this.monstruoActual;
  }

  hacerDano() {
    this.monstruoActual.vida -= 1;  // Ajusta el daño según sea necesario
  }
}
