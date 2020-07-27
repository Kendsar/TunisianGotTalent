import { Component, OnInit } from '@angular/core';
import { COMPETITION_MOCK } from './models/mock';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { CompetitionDataFactoryService } from './factory/competition-data-factory.service';
import { CompetitionService } from './services/competition.service';
import { Competition } from './models/competition.model';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private dataFactory: CompetitionDataFactoryService) { }

  data = COMPETITION_MOCK;
  filteredData;

  EcardType = ECardType;
  filterText = '';

  showCompDetails = false;
  competitionDetails: Competition;

  ngOnInit() {
    this.competitionService.getCompetitions().subscribe(e => {
      this.data = this.dataFactory.competitionCheck(e);
      this.filteredData = this.data;
    })
  }

  search() {
    if (this.filterText.length > 0) {
      this.filteredData = this.data.filter(e => {
        return e.nom.toLowerCase().indexOf(this.filterText.toLowerCase()) != -1 ||
          e.description.toLowerCase().indexOf(this.filterText.toLowerCase()) != -1 ||
          e.comp_type.toLowerCase().indexOf(this.filterText.toLowerCase()) != -1
      });
    } else {
      this.filteredData = this.data;
    }
  }

  seeCompDetails(data) {
    this.showCompDetails = true;
    this.competitionDetails = data;
    console.log('comp', data)
  }
}
