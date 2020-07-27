import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wsUrl } from "environments/environment";
import { Observable } from 'rxjs';
import { StringFormat } from 'app/tunisian-got-talent/shared/shared.utils';


@Injectable({
  providedIn: 'root'
})
export class EntrerpiseService {


  constructor(private http: HttpClient) { }





  /*getAllEntrepriseByUser(idUser) : Observable<any>{
    const url = StringFormat(wsUrl.business.getAll, idUser);
    return this.http.get<any>(wsUrl.business.getAll, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }*/
  getEntrepriseById(): Observable<any> {
    return this.http.get<any>(wsUrl.business.getEntrepriseById, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },

    });
  }

  getAllentreprise(): Observable<any> {
    return this.http.get<any>(wsUrl.business.getAllEntreprise, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },

    });
  }
  addEntreprise(entreprise): Observable<any> {
    return this.http.post<any>(wsUrl.business.addEntreprise, entreprise, {
     headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}