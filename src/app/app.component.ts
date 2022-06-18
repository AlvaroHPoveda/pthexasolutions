import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pthexasolutions';
  longitud: number = 0;
  arrayRandom: number[] = [];
  arraySort: number[] = [];
  generarArray() {
    this.arrayRandom = Array.from({ length: this.longitud }, () =>
      Math.floor(Math.random() * 100)
    );
    this.arraySort = this.arrayRandom.slice();
    this.arraySort.sort((a, b) => a - b);  
  }
}
