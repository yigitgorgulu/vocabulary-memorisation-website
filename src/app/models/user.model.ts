import { Deck } from './deck.model';

export class User {

	public decks: Deck[];

	constructor(
		public id: number = 0,
		public username: string = '',
		public email: string = ''
	) {
		this.decks = [];
	}

	addDeck(deck: Deck) : void {
		this.decks.push(deck);
	}
}

