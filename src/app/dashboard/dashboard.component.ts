import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void { }

}
