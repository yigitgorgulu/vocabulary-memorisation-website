import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DatabaseService } from '../database/database.service';
import { Deck } from '../../models/deck.model';
import { Card } from '../../models/card.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private _auth: AuthService, private _db: DatabaseService) { }

	retrieveUserDecks(): Promise<Deck[]> {
		let userId: number = this._auth.getUserId();

		return <Promise<Deck[]>>this._db.retrieveUserDecks(userId);
	}

	retrieveDeckName(deckId: number): Promise<Deck> {
		return <Promise<Deck>>this._db.retrieveDeckName(deckId);
	}

	retrieveCards(deckId: number): Promise<Card[]> {
		return <Promise<Card[]>>this._db.retrieveCards(deckId);
	}

	retrieveCard(cardId: number): Promise<Card> {
		return <Promise<Card>>this._db.retrieveCard(cardId);
	}

	createNewDeck(): Promise<Deck> {
		let userId: number = this._auth.getUserId();

		return <Promise<Deck>>this._db.createNewDeck(userId);
	}

	createNewCard(deckId: number): Promise<Card> {
		return <Promise<Card>>this._db.createNewCard(deckId);
	}

	updateCard(
		cardId: number,
		deckId: number,
		front: string,
		back: string
	): Promise<Card> {
		return <Promise<Card>>this._db.updateCard(cardId, deckId, front, back);
	}

	deleteCard(cardId: number) {
		this._db.deleteCard(cardId);
	}

	deleteDeck(deckId: number) {
		this._db.deleteDeck(deckId);
	}

}
