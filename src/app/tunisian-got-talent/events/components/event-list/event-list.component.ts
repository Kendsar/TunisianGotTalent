import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ECardType } from "app/shared/card-list/card-list.component";
import { Event } from '../../models/event.model';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  EcardType = ECardType;
  events: Event [] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe((result) => {
      this.events = result;
      console.log("event", this.events);
    });
  }

  // getbyId() {
  //   this.eventService.getAllEvents().subscribe((result) => {
  //     this.events = result;
  //     console.log("event", this.events);
  //   });
  // }
  // createEvent() {
  //   this.eventService.getAllEvents().subscribe((result) => {
  //     this.events = result;
  //     console.log("event", this.events);
  //   });
  // }
  // editEvent() {
  //   this.eventService.getAllEvents().subscribe((result) => {
  //     this.events = result;
  //     console.log("event", this.events);
  //   });
  // }
  // deleteEvent() {
  //   this.eventService.getAllEvents().subscribe((result) => {
  //     this.events = result;
  //     console.log("event", this.events);
  //   });
  // }

}
