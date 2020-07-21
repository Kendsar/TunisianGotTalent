import { Component, OnInit, Input } from '@angular/core';
import { ECardType } from './../card-list/card-list.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipationComponent } from 'app/tunisian-got-talent/events/components/participation/participation.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data;
  @Input() cardType: ECardType;

  EcardType = ECardType;

  constructor( private modalService: NgbModal
    ) { }

  ngOnInit() {
    console.log(this.data);
  }

  openDialog() {
    const modalRef = this.modalService.open(ParticipationComponent);
  }
}
