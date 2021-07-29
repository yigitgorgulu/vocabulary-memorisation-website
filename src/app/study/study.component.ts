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

	opt!: string;
	deckId!: number;
	toStudy!: Card[];
	studied!: { card: Card, answer: string, correct: boolean }[];
	currentIndex!: number;
	score: number;
	done!: boolean;
	show!: boolean;

	constructor(
		private _auth: AuthService,
		private _route: ActivatedRoute,
		private _data: DataService
	) {
		_route.params.subscribe(params => {
			this.opt = params.opt;
			this.deckId = params.id;
		});
		this.score = 0;
		this.currentIndex = 0;
		this.studied = [];
	}

	logout() {
		this._auth.logout();
	}

	ngOnInit(): void {
		this._data.retrieveCards(this.deckId).then(cards => {
			this.toStudy = cards;
			shuffle(this.toStudy);
		});
	}

	submitAnswer(answer: HTMLInputElement) {
		let correct: Card = this.toStudy[this.currentIndex];
		let input: string = answer.value;

		if ( !this.show ) {
			this.score += correct.back === input ? 1 : -1;

			this.studied.push({
				card: correct,
				answer: input,
				correct: correct.back === input
			});

			if ( this.currentIndex < this.toStudy.length - 1 ) {
				this.toStudy.splice(this.currentIndex, 1);
			} else {
				this.done = true;
			}
		}

		answer.value = '';
	}

	nextCard() {
		if ( this.currentIndex < this.toStudy.length - 1 ) {
			this.currentIndex += 1;
			this.show = false;
		}
	}

	previousCard() {
		if ( this.currentIndex >= 1 ) {
			this.currentIndex -= 1;
			this.show = false;
		}
	}

	showAnswer() {
		this.show = true;
	}

}
