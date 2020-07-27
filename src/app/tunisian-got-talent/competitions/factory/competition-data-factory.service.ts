import { Injectable } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CompetitionDataFactoryService {

  constructor(private datePipe: DatePipe) { }

  competitionCheck(data: any): any {


    return data.map(e => {
      e.closed = this.checkDate(e.date_debut);
      e.full = e.nb_participant == e.nb_max_participant;

      return e
    })
  }

  checkDate(compared_date): boolean {
    const actualDate = new Date();
    let actualDateStr = this.datePipe.transform(actualDate, 'yyyy-MM-dd', 'en_US');
    const date = formatDate(compared_date, 'yyyy-MM-dd', 'en_US');

    if (actualDateStr > date) {
      console.log('---actualDate is greater----');
      return false;
    } else {
      console.log('---compared_date is greater-----');
      return true;
    }
  }

}
