import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'cmp-jugador',
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.scss'
})
export class JugadorComponent implements OnInit {
  jugador: Jugador;  // Puede ser un modelo de "Player"

  constructor(private jugadorService: JugadorService) {
    
    this.jugador = this.jugadorService.obtenerDatosJugador();

  }

  ngOnInit(): void {
      
  }
}
