import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styles: [
  ]
})
export class StudyComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  logout() {
    this._auth.logout();
  }

  ngOnInit(): void { }

}
