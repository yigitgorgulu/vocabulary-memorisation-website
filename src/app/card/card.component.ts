import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styles: []
})
export class CardComponent implements OnInit {

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
			let deckId = 0;
			this._route.parent?.params.subscribe(params => deckId = params.id)
			this._data.createNewCard(deckId).then((info: any) => {
				this._router.navigate([`/deck/${deckId}/card/${info.id}`]);
			});
		} else {
			this._data.retrieveCard(this.id).then((info: any) => {
				this.front = info.front;
				this.back = info.back;
			});
		}
	}

}
