import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styles: [
  ]
})
export class DeckComponent implements OnInit {

  id!: number;
  name!: string;
  cards!: Card[];

  constructor(private _auth: AuthService, private _route: ActivatedRoute) {
    _route.params.subscribe(params => this.id = params.id);
  }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void {
    this.name = 'Temp'; // TODO read this from data

    this.cards = [
      {
        id: 0,
        front: "Hallo",
        back: "Hello"
      },
      {
        id: 1,
        front: "Krankenwagen",
        back: "Ambulance"
      },
      {
        id: 2,
        front: "Katze",
        back: "Cat"
      }
    ];
  }

}
