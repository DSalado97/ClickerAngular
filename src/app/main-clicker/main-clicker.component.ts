import { Component } from '@angular/core';

@Component({
  selector: 'main-clicker',
  templateUrl: './main-clicker.component.html',
  styleUrl: './main-clicker.component.scss'
})
export class MainClickerComponent {

  coin: number = 0;

  clickMouse() {
    this.coin++
  }

}
