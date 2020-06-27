import { Component, OnInit } from '@angular/core';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { EVENTS_MOCK } from './models/mock';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  data = EVENTS_MOCK;
  EcardType = ECardType;

  constructor() { }

  ngOnInit() {
  }

}
