import { Favoris, Participate, Rate } from "./../models/event.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { wsUrl } from "environments/environment";
import { Event } from "../models/event.model";
import { StringFormat } from "app/tunisian-got-talent/shared/shared.utils";

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
    const url = StringFormat(wsUrl.event.favoris.getAll, id);
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

  getparticipationByUserID(idUser, idEvent) {
    const url = StringFormat(
      wsUrl.event.participer.getparticipationByEventUserID,
      idUser,
      idEvent
    );
    return this.httpClient.get<boolean>(url, {
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

  addToFavoris(idevent, iduser): Observable<any> {
    const url = StringFormat(wsUrl.event.favoris.create, idevent, iduser);
    return this.httpClient.post<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  deleteFromFavoris(idevent, iduser): Observable<any> {
    const url = StringFormat(wsUrl.event.favoris.delete, idevent, iduser);
    return this.httpClient.delete<any>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  isAlreadyInFavorite(idevent, iduser): Observable<boolean> {
    const url = StringFormat(
      wsUrl.event.favoris.alreadyInFavorite,
      idevent,
      iduser
    );
    return this.httpClient.get<boolean>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  rateEvent(rate: Rate): Observable<any> {
    return this.httpClient.post<any>(wsUrl.event.rating.create, rate, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  getRateByEventUserID(idevent, iduser): Observable<number> {
    const url = StringFormat(
      wsUrl.event.rating.getByEventUserID,
      idevent,
      iduser
    );
    return this.httpClient.get<number>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  participate(p: Participate) : Observable<any>{
    return this.httpClient.post<any>(wsUrl.event.participer.create, p,{
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}