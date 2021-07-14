import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Deck } from '../models/deck.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  decks!: Deck[];

  constructor(private _auth: AuthService) { }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void {
    // TODO import from another source
    this.decks = [
      {
        id : 0,
        name: "German",
        cards: [
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
        ]
      },
      {
        id : 1,
        name: "Turkish",
        cards: [
          {
            id: 0,
            front: "Merhaba",
            back: "Hello"
          },
          {
            id: 1,
            front: "Ambulans",
            back: "Ambulance"
          },
          {
            id: 2,
            front: "Kedi",
            back: "Cat"
          }
        ]
      }
    ];
  }

}
