import { Favoris } from './../../models/event.model';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Event } from "../../models/event.model";
import { GlobalService } from "app/tunisian-got-talent/shared/shared.services";
import { ECardType } from "app/shared/card-list/card-list.component";
import { EventService } from "../../services/event.service";

@Component({
  selector: "app-favoris",
  templateUrl: "./favoris.component.html",
  styleUrls: ["./favoris.component.css"],
})
export class FavorisComponent implements OnInit {
  filtredFavorits: Favoris[] = [];
  form: FormGroup;
  favoris: Favoris[] = [];
  connectedUser: any;
  EcardType = ECardType;
  constructor(
    private favoristService: EventService,
    private globalService: GlobalService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getConnectedUser();
    this.initForm();
    this.search();
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
      if (this.connectedUser) this.getAllFavorisForUser();
    });
  }
  getAllFavorisForUser() {
    this.favoristService
      .getAllFavorisForUser(this.connectedUser.id)
      .subscribe((result) => {
        this.favoris = result;
        this.filtredFavorits = this.favoris;
      });
  }

  refreshData() {
    this.getAllFavorisForUser();
  }

  initForm() {
    this.form = this.fb.group({
      titre: [""],
    });
  }

  reset() {
    this.form.reset();
    this.filtredFavorits = this.favoris;
  }

  search() {
    this.form.controls.titre.valueChanges.subscribe((x) => {
      const titre = x ? x.toLowerCase() : null;
      let result: Favoris[]
      if (titre) {
        result = this.favoris.filter((item) =>
          item.idevent.titre.toLowerCase().includes(titre)
        );
      } else {
        result = this.favoris;
      }
      this.filtredFavorits = result;
    });
  }
}
