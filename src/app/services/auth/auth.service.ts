import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _username: string = '';
  private _email: string = '';
  private _password: string = '';
  private _isLoggedIn: boolean = false;

  login(username: string, password: string): void {
    if ( username === this._username && password === this._password ) {
      this._isLoggedIn = true;
      window.localStorage.setItem('username', username);
    }
  }

  register(username: string, email: string, password: string): void {
    if ( username && email && password ) {
      this._username = username;
      this._email = email;
      this._password = password;
      this._isLoggedIn = true;
      window.localStorage.setItem('username', username);
    }
  }

  logout(): void {
    this._isLoggedIn = false;
    window.localStorage.setItem('username', '');
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn
      || (window.localStorage.getItem('username') !== null
          && window.localStorage.getItem('username') !== '');
  }

}
