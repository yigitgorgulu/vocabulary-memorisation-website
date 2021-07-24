import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
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
      private _data: DataService
  ) {
    _route.params.subscribe(params => this.id = params.id);
  }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void {
    this._data.retrieveDeckName(this.id).then((info: any) => {
      this.name = info.name;
    });

    this.cards = this._data.retrieveCards(this.id);
  }

}
