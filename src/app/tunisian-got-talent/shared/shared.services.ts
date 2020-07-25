import { UserDetails } from './shared.models';
import { wsUrl } from "./../../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class GlobalService {

  private static connectUser = new BehaviorSubject<UserDetails>(null);
    
  constructor(private httpClient: HttpClient) {}

  getConnectedUser(): Observable<UserDetails> {
    return GlobalService.connectUser;
  }

  setConnectedUser(user: UserDetails) {
    GlobalService.connectUser.next(user);
  }

  authentificate(userDetails: UserDetails): Observable<any> {
    return this.httpClient.post<any>(wsUrl.authentification.user, userDetails, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
