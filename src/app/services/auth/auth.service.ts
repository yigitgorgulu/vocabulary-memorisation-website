import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { DatabaseService } from '../database/database.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private _user!: User;

	constructor(private _db: DatabaseService) { }

	login(
		username: string,
		password: string,
		callback: Function,
		context: any
	): void {
		this._user = new User();
		if ( username && password ) {
			this._db.login(username, password).then((user: User) => {
				this.logUserIn(user, callback, context);
			}, (reason: any) => {
				console.log(reason);
			})
		}
	}

	register(
		username: string,
		email: string,
		password: string,
		callback: Function,
		context: any
	): void {
		this._user = new User();
		if ( username && email && password ) {
			this._db.register(username, email, password).then((user: User) => {
				this._db.login(username, password);
				this.logUserIn(user, callback, context);
			}, (reason: any) => {
				console.log(reason);
			});
		}
	}

	logUserIn(user: User, callback: Function, context: any) {
		this._user = user;
		window.localStorage.setItem('username', user.username);
		callback.call(context);
	}

	logout(): void {
		this._db.logout();
	}

	getUserId(): number {
		return this._user ? this._user.id : -1;
	}

	isLoggedIn(): boolean {
		// TODO implement
		return false;
	}

	getInfo(): User {
		// TODO implement
		return this._user;
	}

}
