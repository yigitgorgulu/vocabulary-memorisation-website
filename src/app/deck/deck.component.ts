import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../models/card.model';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styles: [
  ]
})
export class DeckComponent implements OnInit {

  id!: number;
  name!: Promise<string>;
  cards!: Promise<Card[]>;

  constructor(
      private _auth: AuthService,
      private _route: ActivatedRoute,
      private _data: DataService,
      private _router: Router
  ) {
    _route.params.subscribe(params => this.id = params.id);
  }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void {
    if ( Number(this.id) === 0 ) {
      this._data.createNewDeck().then((info: any) => {
        this._router.navigate([`/deck/${info.id}`]);
      });
    } else {
      this._data.retrieveDeckName(this.id).then((info: any) => {
        this.name = info.name;
      });

      this.cards = this._data.retrieveCards(this.id);
    }
  }

}
