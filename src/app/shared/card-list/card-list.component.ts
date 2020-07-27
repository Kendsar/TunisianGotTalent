import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  
  @Output() refreshData = new EventEmitter();
  @Output() cardClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  refresh(event){
    this.refreshData.emit(event);
  }

  emitCardClick(data){
    console.log('card list emitCardClick data', data)
    this.cardClick.emit(data);
  }

}

export enum ECardType {
  COMPETITION = "COMPETITION",
  EVENT = "EVENT",
  TALENT = "TALENT",
  COMMENT = "COMMENT",
  FAVORIS = "FAVORIS",
  FORUM = "FORUM",
}