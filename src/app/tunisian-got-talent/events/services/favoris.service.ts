import { Favoris } from './../models/favoris.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { wsUrl } from "environments/environment";
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';

@Injectable({
  providedIn: "root",
})
export class FavorisService {
  constructor(private httpClient: HttpClient) {}

  getAllFavorisForUser(id): Observable<Favoris[]> {
    const url = StringFormat(wsUrl.event.favoris.getAll , id);
    return this.httpClient.get<Favoris[]>(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

 
 
}
