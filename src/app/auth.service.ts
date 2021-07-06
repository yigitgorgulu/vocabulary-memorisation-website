import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = '';
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    if ( username === this.username && password === this.password ) {
      this.isLoggedIn = true;
    }
  }

  register(username: string, email: string, password: string) {
    if ( username && email && password ) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }

}
