import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  id!: number;
  front!: string;
  back!: string;

  constructor(private _route: ActivatedRoute) {
    _route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    // TODO make dynamic
    this.front = 'Hallo';
    this.back = 'Hello';
  }

}
