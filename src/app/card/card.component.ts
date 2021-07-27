import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styles: []
})
export class CardComponent implements OnInit {

	deckId!: number;
	id!: number;
	front!: string;
	back!: string;

	constructor(
		private _route: ActivatedRoute,
		private _data: DataService,
		private _router: Router
	) {
		_route.params.subscribe(params => this.id = params.id);
	}

	ngOnInit(): void {
		if ( Number(this.id) === 0 ) {
			this._route.parent!.params.subscribe(params => {
				this.deckId = params.id
			});
			this._data.createNewCard(this.deckId).then((info: any) => {
				this._router.navigate([`/deck/${this.deckId}/card/${info.id}`]);
			});
		} else {
			this._data.retrieveCard(this.id).then((info: any) => {
				this.front = info.front;
				this.back = info.back;
				this.deckId = info.deckId;
			});
		}
	}

	updateCard() {
		this._data.updateCard(this.id, this.deckId, this.front, this.back);
	}

	deleteCard() {
		this._data.deleteCard(this.id);
		this._router.navigate([`/deck/${this.deckId}`])
	}

}
