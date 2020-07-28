import { Injectable } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { GlobalService } from 'app/tunisian-got-talent/shared/shared.services';

@Injectable({
  providedIn: 'root'
})
export class CompetitionDataFactoryService {

  connectedUser: any;

  constructor(private datePipe: DatePipe, private globalService: GlobalService) { }

  competitionCheck(data: any, participations: any, ratings: any): any {
    this.globalService.getConnectedUser().subscribe(user => {
      this.connectedUser = user;
    });
    console.log('connectedUser', this.connectedUser)
    console.log('data', data)
    console.log('participations', participations)
    console.log('ratings', ratings)

    let userRatings;
    let userParticipations;

    const allRatings = ratings;
    const allParticipations = participations;

    if (this.connectedUser) {
      userRatings = ratings.filter(e => e.id_user == this.connectedUser.id)
      userParticipations = participations.filter(e => e.id_user == this.connectedUser.id)
    }

    return data.map(e => {
      e.closed = this.checkDate(e.date_debut);
      e.full = e.nb_participant == e.nb_max_participant;
      // e.nb_participant = allParticipations && allParticipations.filter(p => p.id_comp == e.id).length;
      e.participated = userParticipations && userParticipations.filter(p => p.id_comp == e.id)[0] ? true : false;
      return e
    })
  }

  checkDate(compared_date): boolean {
    const actualDate = new Date();
    let actualDateStr = this.datePipe.transform(actualDate, 'yyyy-MM-dd', 'en_US');
    const date = formatDate(compared_date, 'yyyy-MM-dd', 'en_US');

    if (actualDateStr > date) {
      return true;
    } else {
      return false;
    }
  }

}
