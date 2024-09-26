import { Component, OnInit } from '@angular/core';
import { Monstruo } from '../../models/monstruo';
import { MonstruoService } from '../../services/monstruo.service';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'cmp-monstruo',
  templateUrl: './monstruo.component.html',
  styleUrl: './monstruo.component.scss'
})
export class MonstruoComponent implements OnInit{

  monstruo: Monstruo;  // Puede ser un modelo de "Monster"

  constructor(private monstruoService: MonstruoService, private juegoService: JuegoService) {
    this.monstruo = this.monstruoService.getMonstruoActual();

  }

  ngOnInit() {
    
  }

  onClickMonster() {
    this.monstruoService.hacerDano();
    if (this.monstruo.vida <= 0) {
      this.juegoService.anadirMonedas(this.monstruo.recompensa);
      this.monstruoService.spawnNuevoMonstruo();
    }
  }

}
