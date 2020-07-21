import { Component, OnInit } from '@angular/core';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { Event } from '../../models/event.model';
import { Participate } from '../../models/participation.model';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  participation: Participate [] = [];
  EcardType = ECardType;

  constructor() { }

  ngOnInit(): void {
  }
 
}
