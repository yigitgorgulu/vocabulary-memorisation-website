import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../models/card.model';
import { DataService } from '../services/data/data.service';
import { shuffle } from '../utils';

@Component({
	selector: 'app-study',
	templateUrl: './study.component.html',
	styles: []
})
export class StudyComponent implements OnInit {

	opt!: number;
	deckId!: number;
	toStudy!: Card[];
	current!: Card;

	constructor(
		private _auth: AuthService,
		private _route: ActivatedRoute,
		private _data: DataService
	) {
		_route.params.subscribe(params => {
			this.opt = params.opt;
			this.deckId = params.id;
		})
	}

	logout() {
		this._auth.logout();
	}

	ngOnInit(): void {
		this._data.retrieveCards(this.deckId).then(cards => {
			this.toStudy = cards;
			shuffle(this.toStudy);
			this.current = this.toStudy[0];
		});
	}

}
