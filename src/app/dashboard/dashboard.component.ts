import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Deck } from '../models/deck.model';
import { DatabaseService } from '../services/database/database.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  decks!: Promise<Deck[]>;

  constructor(
      private _auth: AuthService,
      private _db: DatabaseService,
      private _data: DataService
  ) { }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void {
    this.decks = this._data.retrieveUserDecks();
  }

}
