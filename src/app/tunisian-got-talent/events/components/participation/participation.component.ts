import { Component, OnInit } from '@angular/core';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Participate } from '../../models/event.model';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  participation: Participate [] = [];
  EcardType = ECardType;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  navigate()
  {
    this.activeModal.close();

  }
 
}
