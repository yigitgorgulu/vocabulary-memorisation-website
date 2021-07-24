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

	async register(username: string, email: string, password: string) {
		let user: any = await this._http.post(
			`${this._dbUrl}/users`,
			{
				username: username,
				email: email,
				password: password // TODO hash
			}).toPromise();

		return new User(user.id, user.username, user.email);
	}

	async retrieveUserData(username: string, password: string) {
		let users: any = await this._http.get(
			`${this._dbUrl}/users`
			+ `?username=${username}&password=${password}`
		).toPromise();

		console.log(users);

		let decks: any = await this._http.get(
			`${this._dbUrl}/decks`
			+ `?userId=${users[0].id}`
		).toPromise();

		let user: User = new User(users[0].id, users[0].username, users[0].email);
		for ( let i = 0; i < decks.length; i++ ) {
			user.addDeck(decks[i]);
		}

		return user;
	}

	async login(username: string, password: string) {
		let user: User = await this.retrieveUserData(username, password);

		await this._http.post(`${this._dbUrl}/sessions`, {
			username: username
		}).toPromise();

		return user;
	}

	async logout(userId: number) {
		await this._http
				  .delete(`${this._dbUrl}/sessions/${userId}`)
				  .toPromise();
	}

	async retrieveUserDecks(userId: number) {
		return await this._http
						 .get(`${this._dbUrl}/users/${userId}/decks`)
						 .toPromise();
	}

}
