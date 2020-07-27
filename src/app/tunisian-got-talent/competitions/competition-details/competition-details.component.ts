import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Rate } from 'app/tunisian-got-talent/events/models/event.model';

@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.scss']
})
export class CompetitionDetailsComponent implements OnInit {

  constructor() { }

  @Input() comp;
  @Output() back = new EventEmitter();


  ngOnInit() {
  }

  backToList() {
    this.back.emit();
  }

  competitionRateChanged(event, data){
    if (event>0){
      let rate = new Rate()
      console.log('data', data)
      console.log('event', event)
      // rate.iduser = this.connectedUser.id;
      rate.value = event;
      // this.eventService.rateEvent(rate).subscribe();
    }
  }
}
