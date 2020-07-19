import { Profil } from './../models/talent.models';
import { wsUrl } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';

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

    getProfilById(id): Observable<any> {
      const url = StringFormat(wsUrl.talent.profil.getById , id);
      return this.httpClient.get<any>(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
  }