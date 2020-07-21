import { Component, OnInit } from "@angular/core";
import { EventService } from "../../services/event.service";
import { ECardType } from "app/shared/card-list/card-list.component";
import { Event } from "../../models/event.model";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"],
})
export class EventListComponent implements OnInit {
  form: FormGroup;

  EcardType = ECardType;
  events: Event[] = [];
  filtredEvents: Event[] = [];
  constructor(private eventService: EventService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllEvents();
    this.initForm();
    this.search();
  }

  initForm() {
    this.form = this.fb.group({
      category: [""],
    });
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe((result) => {
      this.events = result;
      console.log("event", this.events);
      this.filtredEvents = this.events;
    });
  }

  reset() {
    this.form.reset();
    this.filtredEvents = this.events;
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

  search() {
    this.form.controls.category.valueChanges.subscribe((x) => {
      const category = x ? x.toLowerCase() : null;
      let result: Event[] = [];
      if (category) {
        result = this.events.filter((item) =>
          item.id_cat.titrecat.toLowerCase().includes(category)
        );
      } else {
        result = this.events;
      }
      this.filtredEvents = result;
    });
  }
}
