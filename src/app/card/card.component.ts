import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  front: string;
  back: string;

  constructor() {
    // TODO make dynamic
    this.front = 'Hallo';
    this.back = 'Hello';
  }

  ngOnInit(): void {
  }

}
