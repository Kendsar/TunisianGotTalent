import { Profil } from './../../models/talent.models';
import { TalentService } from "./../../services/talent.services";
import { ECardType } from "./../../../../shared/card-list/card-list.component";
import { EVENTS_MOCK } from "./../../../events/models/mock";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-talent-list",
  templateUrl: "./talent-list.component.html",
  styleUrls: ["./talent-list.component.css"],
})
export class TalentListComponent implements OnInit {
  data = EVENTS_MOCK;
  EcardType = ECardType;
  profils: Profil[] = []

  constructor(private talentService: TalentService) {}

  ngOnInit(): void {
    this.getAllProfils();
  }

  getAllProfils() {
    this.talentService.getAllProfils().subscribe(result=>{
      this.profils = result;
      console.log('prof',this.profils)
    })
  }
}
