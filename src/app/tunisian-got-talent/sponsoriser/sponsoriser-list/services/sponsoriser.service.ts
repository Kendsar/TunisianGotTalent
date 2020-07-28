import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wsUrl } from "environments/environment";
import { Observable } from 'rxjs';
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';


@Injectable({
  providedIn: 'root'
}) 
export class SponosriseService {


  constructor(private http: HttpClient) { }


  sponsorise(): Observable<any> {
    return this.http.get<any>(wsUrl.business.sponsorise, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  
}