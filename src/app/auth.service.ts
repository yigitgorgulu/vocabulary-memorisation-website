import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _username: string = '';
  private _email: string = '';
  private _password: string = '';
  private _isLoggedIn: boolean = false;

  login(username: string, password: string) {
    if ( username === this._username && password === this._password ) {
      this._isLoggedIn = true;
    }
  }

  register(username: string, email: string, password: string) {
    if ( username && email && password ) {
      this._username = username;
      this._email = email;
      this._password = password;
      this._isLoggedIn = true;
    }
  }

  logout() {
    this._isLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
