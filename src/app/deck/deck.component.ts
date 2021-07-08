import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styles: [
  ]
})
export class DeckComponent implements OnInit {

  name!: string;

  constructor(private _auth: AuthService) { }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void {
    this.name = 'Temp'; // TODO read this from data
  }

}
