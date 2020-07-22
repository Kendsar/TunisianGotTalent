import { Router } from "@angular/router";
import { GlobalService } from "./../../../shared/shared.services";
import { Profil } from "./../../models/talent.models";
import { TalentService } from "./../../services/talent.services";
import { ECardType } from "./../../../../shared/card-list/card-list.component";

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-talent-list",
  templateUrl: "./talent-list.component.html",
  styleUrls: ["./talent-list.component.css"],
})
export class TalentListComponent implements OnInit {
  EcardType = ECardType;
  profils: Profil[] = [];
  filtredProfils: Profil[] = [];
  form: FormGroup;
  connectedUser: any;
  profilAlreadyCreated: boolean;
  userProfilId: number;

  constructor(
    private talentService: TalentService,
    private fb: FormBuilder,
    private globalService: GlobalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getConnectedUser();
    this.getAllProfils();
    this.initForm();
    this.search();
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
      if (this.connectedUser) this.alreadyHaveProfil(this.connectedUser.id);
    });
  }

  alreadyHaveProfil(idUser) {
    this.talentService.alreadyHaveProfil(idUser).subscribe((result) => {
      if (result) {
        this.profilAlreadyCreated = true;
        this.userProfilId = result.id;
      } else {
        this.profilAlreadyCreated = false;
      }
    });
  }

  initForm() {
    this.form = this.fb.group({
      username: [""],
      category: [""],
      governorate: [""],
    });
  }

  reset() {
    this.form.reset();
    this.filtredProfils = this.profils;
  }

  getAllProfils() {
    this.talentService.getAllProfils().subscribe((result) => {
      this.profils = result;
      this.filtredProfils = this.profils;
    });
  }

  createProfil() {
    this.router.navigate(["/createProfil"]);
  }

  navigateToProfil() {
    this.router.navigate(["/profilDetails", this.userProfilId]);
  }

  search() {
    this.form.valueChanges.subscribe((x) => {
      const username = x.username ? x.username.toLowerCase() : null;
      const category = x.category ? x.category.toLowerCase() : null;
      const governorate = x.governorate ? x.governorate.toLowerCase() : null;

      let result: Profil[] = [];
      if (username && category && governorate) {
        result = this.profils.filter(
          (item) =>
            item.iduser.username_canonical.toLowerCase().includes(username) &&
            item.governorate.toLowerCase().includes(governorate) &&
            item.category.toLowerCase() == category
        );
      } else if (username && category) {
        result = this.profils.filter(
          (item) =>
            item.iduser.username_canonical.toLowerCase().includes(username) &&
            item.category.toLowerCase() == category
        );
      } else if (username && governorate) {
        result = this.profils.filter(
          (item) =>
            item.iduser.username_canonical.toLowerCase().includes(username) &&
            item.governorate.toLowerCase().includes(governorate)
        );
      } else if (governorate && category) {
        result = this.profils.filter(
          (item) =>
            item.governorate.toLowerCase().includes(governorate) &&
            item.category.toLowerCase() == category
        );
      } else if (username) {
        result = this.profils.filter((item) =>
          item.iduser.username_canonical.toLowerCase().includes(username)
        );
      } else if (governorate) {
        result = this.profils.filter((item) =>
          item.governorate.toLowerCase().includes(governorate)
        );
      } else if (category) {
        result = this.profils.filter(
          (item) => item.category.toLowerCase() == category
        );
      } else {
        result = this.profils;
      }
      this.filtredProfils = result;
    });
  }
}
