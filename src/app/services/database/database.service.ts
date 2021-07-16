import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	constructor(
		private _http: HttpClient,
		@Inject('DB_URL') private _dbUrl: string
	) { }

	async register(username: string, email: string, password: string): Promise<User> {
		let user: any = await this._http.post(`${this._dbUrl}/users`, {
			username: username,
			email: email,
			password: password // TODO hash
		}).toPromise();

		return new User(user.id, user.username, user.email);
	}

}
