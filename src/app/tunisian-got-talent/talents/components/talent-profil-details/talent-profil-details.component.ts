import { ECardType } from 'app/shared/card-list/card-list.component';
import { ProfilDetail } from './../../models/talent.models';
import { TalentService } from "./../../services/talent.services";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profil-details",
  templateUrl: "./talent-profil-details.component.html",
  styleUrls: ["./talent-profil-details.component.css"],
})
export class TalentProfilDetailsComponent implements OnInit {
  EcardType = ECardType;
  profil: ProfilDetail;
  idProfil: number;
  comments: Comment[] = [];
  constructor(private talentService: TalentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdFromPath()
    this.getProfil(this.idProfil);
    this.getProfilComments(this.idProfil);
  }

  getIdFromPath(){
    this.route.params.subscribe(params => {
      this.idProfil = +params['id'];
   });
  }

  youtubeNavigator(videoUrl) {
    window.open(videoUrl, "_blank");
  }

  getProfil(id) {
    this.talentService.getProfilById(id).subscribe((result) => {
      this.profil = result;
      console.log('profil',this.profil)
    });
  }

  getProfilComments(id){
    this.talentService.getCommentByProfil(id).subscribe(result=>{
      this.comments = result;
      console.log('comments',this.comments)
    })
  }
}
