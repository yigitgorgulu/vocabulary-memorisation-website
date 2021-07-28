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
	currentIndex!: number;
	score: number;
	done!: boolean;

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
	}

	logout() {
		this._auth.logout();
	}

	ngOnInit(): void {
		this._data.retrieveCards(this.deckId).then(cards => {
			this.toStudy = cards;
			shuffle(this.toStudy);
			this.currentIndex = 0;
		});
	}

	checkAnswer(answer: HTMLInputElement) {
		if ( this.toStudy[this.currentIndex].back === answer.value ) {
			this.score += 1;
			answer.value = '';
			if ( this.currentIndex !== this.toStudy.length - 1 ) {
				this.toStudy.splice(this.currentIndex, 1);
			} else {
				this.done = true;
				answer.disabled = true;
			}
		} else {
			this.score -= 1;
		}
	}

	nextCard() {
		if ( this.currentIndex < this.toStudy.length - 1 ) {
			this.currentIndex += 1;
		}
	}

	previousCard() {
		if ( this.currentIndex >= 1 ) {
			this.currentIndex -= 1;
		}
	}

	showAnswer() {
		// TODO implement
	}

}
