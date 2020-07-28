import { Component, OnInit } from '@angular/core';
import { COMPETITION_MOCK } from './models/mock';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { CompetitionDataFactoryService } from './factory/competition-data-factory.service';
import { CompetitionService } from './services/competition.service';
import { Competition } from './models/competition.model';
import { GlobalService } from '../shared/shared.services';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private dataFactory: CompetitionDataFactoryService, private globalService: GlobalService) { }

  data = COMPETITION_MOCK;
  filteredData;

  EcardType = ECardType;
  filterText = '';

  showCompDetails = false;
  competitionDetails: Competition;

  ngOnInit() {
      this.competitionService.getCompetitions().subscribe(comps => {
        this.competitionService.getCompParticipations().subscribe(particips => {
          this.competitionService.getCompRatings().subscribe(ratings => {
            this.data = this.dataFactory.competitionCheck(comps, particips, ratings);
            this.filteredData = this.data;
          });
        });
      });
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
  }

  participateComp(competition) {
    this.competitionService.participate(competition).subscribe(e => { })
  }
}
