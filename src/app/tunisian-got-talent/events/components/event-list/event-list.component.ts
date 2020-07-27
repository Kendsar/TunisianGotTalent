import { Component, OnInit } from "@angular/core";
import { EventService } from "../../services/event.service";
import { ECardType } from "app/shared/card-list/card-list.component";
import { Event } from "../../models/event.model";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalService } from "app/tunisian-got-talent/shared/shared.services";
@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"],
})
export class EventListComponent implements OnInit {
  form: FormGroup;
  connectedUser: any;
  EcardType = ECardType;
  events: Event[] = [];
  filtredEvents: Event[] = [];
  constructor(private eventService: EventService, private fb: FormBuilder,
    private router: Router ,private globalService: GlobalService) {}

  ngOnInit(): void {
    this.getConnectedUser();
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


  search() {
    this.form.controls.category.valueChanges.subscribe((x) => {
      const category = x ? x.toLowerCase() : null;
      let result: Event[] = [];
      if (category) {
        result = this.events.filter((item) =>
          item.idcat.titrecat.toLowerCase().includes(category)
        );
      } else {
        result = this.events;
      }
      this.filtredEvents = result;
    });
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
    });
  }

  navigate(){
    this.router.navigate(["/favoris",this.connectedUser.id]);
  }
}
