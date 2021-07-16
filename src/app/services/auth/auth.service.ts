import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { DatabaseService } from '../database/database.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private _user!: User;

	constructor(private _db: DatabaseService) { }

	login(username: string, password: string): void {
		// TODO implement
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
				this._user = user;
				callback.call(context);
				this.login(username, password);
			}, (reason: any) => {
				console.log(reason);
			});
		}
	}

	logout(): void {
		// TODO implement
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
