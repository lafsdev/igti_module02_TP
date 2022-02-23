import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  itemImageUrl: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZmbxGeHrahj1Mmd6HFYK_ZotYaC5N4DbXChpdFDs5MTNY90EQdeK3pDE8NxTK1zVNG0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKqV69UI_E3ottVXV842Ca_UJqDn3W2xcITArq_Gtpit-9xfHBufmrR3DIVYHBSQsnN4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8XDynId12jC55pqiR8FIopd5jbrXfLCxULdcJ70QqUwLxEgaz7tkRCVs9hXu4vsFBi0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jUwevFmmIDKdMQWkeJMH_y95ss3i_dwXwixHgzS0ZwIuJ8C1F37q1uyn5fPUPxp0XXg&usqp=CAU',
  ];
  item: string[0] = this.itemImageUrl[0];
  i: number = 0;
  titulo: string = 'Galeria de Fotos';

  nextImage() {
    if (this.i < this.itemImageUrl.length - 1) {
      this.i++;
      this.item = this.itemImageUrl[this.i];
    }
  }
  firstImage() {
    this.item = this.itemImageUrl[0];
    this.i = 0;
  }

  last() {
    this.item = this.itemImageUrl[this.itemImageUrl.length - 1];
    this.i = this.itemImageUrl.length - 1;
  }

  lastImage() {
    if (this.i > 0) {
      this.i--;
      this.item = this.itemImageUrl[this.i];
    }
  }
}
