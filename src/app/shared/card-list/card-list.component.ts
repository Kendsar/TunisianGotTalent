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

  @Output() participateToCompetition = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  refresh(event){
    this.refreshData.emit(event);
  }

  emitCardClick(data){
    this.cardClick.emit(data);
  }

  competitionParticipate(competition) {
    this.participateToCompetition.emit(competition);
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