import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  login() {
    this.auth.login('user', 'pass');
  }

  register() {
    this.auth.register('user', 'email', 'pass');
  }

}
