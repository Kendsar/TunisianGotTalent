import { TalentService } from "./../../services/talent.services";
import { Component, OnInit } from "@angular/core";
import { Profil } from "../../models/talent.models";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profil-details",
  templateUrl: "./talent-profil-details.component.html",
  styleUrls: ["./talent-profil-details.component.css"],
})
export class TalentProfilDetailsComponent implements OnInit {

  profil: Profil;
  idProfil: number;
  constructor(private talentService: TalentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdFromPath()
    this.getProfil(this.idProfil);
  }

  getIdFromPath(){
    this.route.params.subscribe(params => {
      this.idProfil = +params['id'];
   });
  }

  youtubeNavigator() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  }

  getProfil(id) {
    this.talentService.getProfilById(id).subscribe((result) => {
      this.profil = result;
      console.log('profil',this.profil)
    });
  }
}
