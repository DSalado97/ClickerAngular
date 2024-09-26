import { Injectable } from '@angular/core';
import { JugadorService } from './jugador.service';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private jugadorService: JugadorService) {}

  anadirMonedas(cantidad: number) {
    this.jugadorService.modificarMonedas(cantidad);
  }
}
