import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {

	private _sessionId!: number;

	constructor(
		private _http: HttpClient,
		@Inject('DB_URL') private _dbUrl: string
	) { }

	async register(username: string, email: string, password: string) {
		let user: any = await this._http.post(
			`${ this._dbUrl }/users`,
			{
				username: username,
				email: email,
				password: password // TODO hash
			}).toPromise();

		return new User(user.id, user.username, user.email);
	}

	async retrieveUserData(username: string, password: string) {
		let users: any = await this._http.get(
			`${ this._dbUrl }/users`
			+ `?username=${ username }&password=${ password }`
		).toPromise();

		console.log(users);

		let decks: any = await this._http.get(
			`${ this._dbUrl }/decks`
			+ `?userId=${ users[0].id }`
		).toPromise();

		let user: User = new User(users[0].id, users[0].username, users[0].email);
		for ( let i = 0; i < decks.length; i++ ) {
			user.addDeck(decks[i]);
		}

		return user;
	}

	async login(username: string, password: string) {
		let user: User = await this.retrieveUserData(username, password);

		await this._http.post(`${ this._dbUrl }/sessions`, {
			username: username
		}).toPromise().then((session: any) => {
			this._sessionId = session.id;
		});

		return user;
	}

	async logout() {
		await this._http
				  .delete(`${ this._dbUrl }/sessions/${ this._sessionId }`)
				  .toPromise();
	}

	async retrieveUserDecks(userId: number) {
		return await this._http
						 .get(`${ this._dbUrl }/users/${ userId }/decks`)
						 .toPromise();
	}

	async retrieveDeckName(deckId: number) {
		return await this._http
						 .get(`${ this._dbUrl }/decks/${ deckId }`)
						 .toPromise();
	}

	async retrieveCards(deckId: number) {
		return await this._http
						 .get(`${ this._dbUrl }/decks/${ deckId }/cards`)
						 .toPromise();
	}

	async retrieveCard(cardId: number) {
		return await this._http
						 .get(`${ this._dbUrl }/cards/${ cardId }`)
						 .toPromise();
	}

	async createNewDeck(userId: number) {
		return await this._http
						 .post(
							 `${ this._dbUrl }/users/${ userId }/decks`,
							 {
								 name: ''
							 }
						 ).toPromise();
	}

	async createNewCard(deckId: number) {
		return await this._http
						 .post(
							 `${ this._dbUrl }/decks/${ deckId }/cards`,
							 {
								 front: '',
								 back: ''
							 }
						 ).toPromise();
	}

	async updateCard(
		cardId: number,
		deckId: number,
		front: string,
		back: string
	) {
		return await this._http
						 .put(
							 `${ this._dbUrl }/cards/${ cardId }`,
							 {
								 front: front,
								 back: back,
								 deckId: deckId
							 }).toPromise();
	}

	async deleteCard(cardId: number) {
		return await this._http
						 .delete(`${ this._dbUrl }/cards/${ cardId }`)
						 .toPromise();
	}

	async deleteDeck(deckId: number) {
		return await this._http
						 .delete(`${ this._dbUrl }/decks/${ deckId }`)
						 .toPromise();
	}

	async updateDeckName(name: string, deckId: number, userId: number) {
		return await this._http.put(`${this._dbUrl}/decks/${deckId}`, {
			name: name,
			userId: userId
		}).toPromise();
	}

}
