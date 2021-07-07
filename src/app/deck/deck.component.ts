import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styles: [
  ]
})
export class DeckComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void { }

}
