import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  
  jugador: Jugador = {
    monedas: 0,
    mejoras: []
  };

  obtenerDatosJugador() {
    return this.jugador;
  }

  modificarMonedas(cantidad: number) {
    this.jugador.monedas += cantidad;
  }
}

