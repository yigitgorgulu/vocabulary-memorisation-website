import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DatabaseService } from '../database/database.service';
import { Deck } from '../../models/deck.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private _auth: AuthService, private _db: DatabaseService) { }

	retrieveUserDecks(): Promise<Deck[]> {
		let userId: number = this._auth.getUserId();

		return <Promise<Deck[]>>this._db.retrieveUserDecks(userId);
	}

}
