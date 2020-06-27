import { Component, OnInit, Input } from '@angular/core';
import { ECardType } from './../card-list/card-list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data;
  @Input() cardType: ECardType;

  EcardType = ECardType;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
