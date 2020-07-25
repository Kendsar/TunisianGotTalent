import { Component, OnInit } from '@angular/core';
import { COMPETITION_MOCK } from './models/mock';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { CompetitionDataFactoryService } from './factory/competition-data-factory.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor(private dataFactory: CompetitionDataFactoryService) { }

  data = COMPETITION_MOCK;
  filteredData;

  EcardType = ECardType;
  filterText = '';

  ngOnInit() {
    this.data = this.dataFactory.competitionCheck(this.data);
    this.filteredData = this.data;
    console.log('filteredData', this.filteredData)
  }

  search() {
    if (this.filterText.length > 0) {
      this.filteredData = this.data.filter(e => {
        return e.nom.toLowerCase().indexOf(this.filterText.toLowerCase()) != -1 ||
          e.description.toLowerCase().indexOf(this.filterText.toLowerCase()) != -1
      });
    } else {
      this.filteredData = this.data;
    }
  }
}
