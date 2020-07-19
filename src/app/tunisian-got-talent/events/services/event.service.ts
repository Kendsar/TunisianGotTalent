import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { wsUrl } from "environments/environment";
import { Event } from "../models/event.model";

@Injectable({
  providedIn: "root",
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(wsUrl.event.events.getAll, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getbyId(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(wsUrl.event.events.getById, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  createEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(wsUrl.event.events.create, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  editEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(wsUrl.event.events.edit, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  deleteEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(wsUrl.event.events.delete, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    
  }

  searchEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(wsUrl.event.events.search, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    
  }
 
}
