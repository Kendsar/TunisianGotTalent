import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { wsUrl } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

constructor(private http: HttpClient) { }

getCompetitions(): Observable<any> {
  return this.http.get(wsUrl.competition.getAll);
}

/**
 * TEST
 * COMP MOCK
 */
newCompMock(): Observable<any> {
  return this.http.get(wsUrl.competition.newMock);
}

createComp(competition): Observable<any> {
  return this.http.put(wsUrl.competition.createCompetition, competition);
}

editComp(compId): Observable<any> {
  return this.http.post(wsUrl.competition.editCompetition, compId);
}

deleteComp(compId): Observable<any> {
  return this.http.post(wsUrl.competition.deleteCompetition, compId);
}

participate(){}

vote(){}

}
