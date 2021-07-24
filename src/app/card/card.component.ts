import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  id!: number;
  front!: string;
  back!: string;

  constructor(private _route: ActivatedRoute, private _data: DataService) {
    _route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this._data.retrieveCard(this.id).then((info: any) => {
      this.front = info.front;
      this.back = info.back;
    });
  }

}
