import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../models/card.model';
import { DataService } from '../services/data/data.service';

@Component({
	selector: 'app-deck',
	templateUrl: './deck.component.html',
	styles: []
})
export class DeckComponent implements OnInit {

	id!: number;
	name!: string;
	cards!: Card[];

	constructor(
		private _auth: AuthService,
		private _route: ActivatedRoute,
		private _data: DataService,
		private _router: Router
	) {
		_route.params.subscribe(params => this.id = params.id);
		this.name = '';
		this.cards = [];
	}

	logout() {
		this._auth.logout();
	}

	ngOnInit(): void {
		if ( Number(this.id) === 0 ) {
			this._data.createNewDeck().then((info: any) => {
				this._router.navigate([`/deck/${ info.id }`]);
			});
		} else {
			this._data.retrieveDeckName(this.id).then((info: any) => {
				this.name = info.name;
			});

			this._data.retrieveCards(this.id).then((cards: Card[]) => {
				this.cards.push(...cards);
			});
		}
	}

	onDeactivate(event: any) {
		console.log(event);
		console.log(this.cards);

		let matching: Card = {
			front: '',
			back: '',
			deckId: 0,
			id: 0
		};
		let index = -1;

		this.cards.forEach((card: Card, idx: number) => {
			if ( card.id.toString() === event.id ) {
				matching = card;
				index = idx;
			}
		});

		if ( matching.id === 0 ) { // not found, new card
			this.cards.push({
				front: event.front,
				back: event.back,
				deckId: event.deckId,
				id: Number(event.id)
			});
		} else if ( event.front === '' || event.back === '' ) { // card deleted
			this.cards.splice(index, 1);
		} else if ( matching.front !== event.front
			|| matching.back !== event.back ) { // updated card
			this.cards.splice(index, 1, {
				front: event.front,
				back: event.back,
				deckId: event.deckId,
				id: event.id
			});
		}
	}

}

