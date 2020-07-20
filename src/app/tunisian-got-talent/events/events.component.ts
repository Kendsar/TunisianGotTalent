import { Component, OnInit } from "@angular/core";
import { ECardType } from "app/shared/card-list/card-list.component";
import { EVENTS_MOCK } from "./models/mock";
import { EventService } from "./services/event.service";
import { Event } from "./models/event.model";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
 

  constructor() {}

  ngOnInit(): void {
  }


}
