import { GlobalService } from "./../../../shared/shared.services";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { ECardType } from "app/shared/card-list/card-list.component";
import { ProfilDetail, Comment, Profil } from "./../../models/talent.models";
import { TalentService } from "./../../services/talent.services";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-profil-details",
  templateUrl: "./talent-profil-details.component.html",
  styleUrls: ["./talent-profil-details.component.css"],
})
export class TalentProfilDetailsComponent implements OnInit {
  EcardType = ECardType;
  profil: ProfilDetail;
  idProfil: number;
  connectedUser: any;
  comments: Comment[] = [];
  commentForm: FormGroup;
  constructor(
    private talentService: TalentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private globalService: GlobalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIdFromPath();
    this.getProfil(this.idProfil);
    this.getProfilComments(this.idProfil);
    this.getConnectedUser();
    this.initForm();
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
    });
  }

  initForm() {
    this.commentForm = this.fb.group({
      comment: ["", Validators.required],
    });
  }

  getIdFromPath() {
    this.route.params.subscribe((params) => {
      this.idProfil = +params["id"];
    });
  }

  youtubeNavigator(videoUrl) {
    window.open(videoUrl, "_blank");
  }

  comment() {
    if (this.commentForm.valid) {
      const comment = this.commentForm.controls.comment.value;
      console.log("comment", comment);
      let myComment: Comment = new Comment();
      myComment.text = comment;
      myComment.iduser = {};
      myComment.profil = new Profil();
      myComment.iduser.id = this.connectedUser.id;
      myComment.profil.id = this.idProfil;
      this.talentService.addComment(myComment).subscribe((result) => {
        this.getProfilComments(this.idProfil);
        this.commentForm.reset();
      });
    }
  }

  login() {
    this.router.navigate(["/signup"]);
  }

  getProfil(id) {
    this.talentService.getProfilById(id).subscribe((result) => {
      this.profil = result;
      console.log("profil", this.profil);
    });
  }

  getProfilComments(id) {
    this.talentService.getCommentByProfil(id).subscribe((result) => {
      this.comments = result;
    });
  }
}