import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wsUrl } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EntrerpiseService {


  constructor(private http: HttpClient) { }

  getAllEntreprises() {
    return this.http.get<any>(wsUrl.business.getAll, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
