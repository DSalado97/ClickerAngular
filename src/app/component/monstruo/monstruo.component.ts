import { Component } from '@angular/core';

@Component({
  selector: 'monstruo',
  templateUrl: './monstruo.component.html',
  styleUrl: './monstruo.component.scss'
})
export class MonstruoComponent {

  coin: number = 0;

  clickMouse() {
    this.coin++
  }

}
