import { Favoris, Participate } from './../models/event.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { wsUrl } from "environments/environment";
import { Event } from "../models/event.model";
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';

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


  getAllFavorisForUser(id): Observable<Favoris[]> {
    const url = StringFormat(wsUrl.event.favoris.getAll , id);
    return this.httpClient.get<Favoris[]>(url, {
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

  // getPartcicpationByUserId(idUser, idEvent){
  //   const url = StringFormat(wsUrl.event.participer.getById, idUser, idEvent);
  //   return this.httpClient.post<Participate>
    
    
  //   <boolean>(url ,{
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  // }


  // newParticipation(idUser, idEvent): Observable<Participate[]>
  // {
  //   return this.httpClient.post<Participate[]>(wsUrl.event.participer.create, idUser, idEvent {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  // }

  getparticipationByUserID(idUser, idEvent){
    const url = StringFormat(wsUrl.event.participer.getparticipationByUserID, idUser, idEvent);
    return this.httpClient.get<boolean>(url ,{
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

 
}
