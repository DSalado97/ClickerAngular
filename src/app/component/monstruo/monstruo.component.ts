import { Component, OnInit } from '@angular/core';
import { Monstruo } from '../../models/monstruo';
import { MonstruoService } from '../../services/monstruo.service';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'cmp-monstruo',
  templateUrl: './monstruo.component.html',
  styleUrl: './monstruo.component.scss'
})
export class MonstruoComponent{

  bestiario: any[] = []
  monstruo: Monstruo;  // Puede ser un modelo de "Monster"

  constructor(private monstruoService: MonstruoService, private juegoService: JuegoService) {
    this.monstruoService.cargarMonstruos().subscribe(response => {
      console.log('Monstruos cargados:', response);
      this.bestiario = response;
    }, error => {
      console.error('Error cargando monstruos:', error);
    });

    this.monstruo = {
      nombre: "Goblin",
      vidaActual: 10,
      vidaMaxima: 10,
      recompensa: 10,
      experiencia: 1
    }
  }

  onClickMonster() {
    this.hacerDano();
    if (this.monstruo.vidaActual <= 0) {
      alert("Murió")
      this.juegoService.anadirMonedas(this.monstruo.recompensa);
      alert("Recompensado")
      this.spawnNuevoMonstruo();
      alert("Spawneo")
    }
  }

  hacerDano() {

  }

  spawnNuevoMonstruo() {
    console.log(this.bestiario)
  }

}
