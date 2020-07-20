import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() data;
  @Input() cardType: ECardType;

  @Input() pageIndex = 1;
  @Input() pageSize = 2;
  
  
  constructor() { }

  ngOnInit() {
  }

}

export enum ECardType {
  COMPETITION = "COMPETITION",
  EVENT = "EVENT",
  TALENT = "TALENT"
}