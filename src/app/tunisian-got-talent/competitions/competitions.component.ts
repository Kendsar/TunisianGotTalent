import { Component, OnInit } from '@angular/core';
import { COMPETITION_MOCK } from './models/mock';
import { ECardType } from 'app/shared/card-list/card-list.component';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor() { }

  data = COMPETITION_MOCK;
  EcardType = ECardType;
  
  ngOnInit() {
  }

}
