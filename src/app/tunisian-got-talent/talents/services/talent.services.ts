import { Profil } from './../models/talent.models';
import { wsUrl } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class TalentService {
    constructor(private httpClient: HttpClient){}

    /**************Profil Services*****************/

    getAllProfils(): Observable<Profil[]> {
      return this.httpClient.get<Profil[]>(wsUrl.talent.profil.getAll, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }