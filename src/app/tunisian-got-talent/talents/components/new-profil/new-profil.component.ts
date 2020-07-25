import { Router, ActivatedRoute } from "@angular/router";
import { Profil, ProfilDetail } from "./../../models/talent.models";
import { TalentService } from "./../../services/talent.services";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { GlobalService } from "./../../../shared/shared.services";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-profil",
  templateUrl: "./new-profil.component.html",
  styleUrls: ["./new-profil.component.css"],
})
export class NewProfilComponent implements OnInit {
  connectedUser: any;
  profilForm: FormGroup;
  idProfil: number;
  activateEditMode: boolean = false;
  profil: Profil;
  imageList: string = '';
  constructor(
    private globalService: GlobalService,
    private fb: FormBuilder,
    private talentService: TalentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getConnectedUser();
    this.getIdFromPath();
    this.initForm();
  }

  getIdFromPath() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.idProfil = params["id"];
        this.activateEditMode = true;
        this.getProfilByID(this.idProfil);
      }
    });
  }

  getProfilByID(idProfil) {
    this.talentService.getProfilById(idProfil).subscribe((result) => {
      this.profil = result.profils;
      this.patchField(this.profil);
    });
  }

  initForm() {
    this.profilForm = this.fb.group({
      name: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required],
      age: ["", Validators.required],
      number: ["", Validators.required],
      address: ["", Validators.required],
      governorate: ["", Validators.required],
      youtubeLink: ["", Validators.required],
      photos: [""],
    });
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
    });
  }

  patchField(profil) {
    this.profilForm.controls.name.setValue(profil.talent);
    this.profilForm.controls.category.setValue(profil.category);
    this.profilForm.controls.description.setValue(profil.description);
    this.profilForm.controls.age.setValue(profil.age);
    this.profilForm.controls.number.setValue(profil.telephone);
    this.profilForm.controls.address.setValue(profil.address);
    this.profilForm.controls.governorate.setValue(profil.governorate);
    this.profilForm.controls.youtubeLink.setValue(profil.video);
    //this.profilForm.controls.photos.setValue(profil.photo);
  }

  reset() {
    this.profilForm.reset();
  }

  save() {
    if (this.profilForm.valid) {
      let profil: Profil = new Profil();
      profil.iduser = {};
      profil.iduser.id = this.connectedUser.id;
      profil.talent = this.profilForm.controls.name.value;
      profil.category = this.profilForm.controls.category.value;
      profil.description = this.profilForm.controls.description.value;
      profil.age = this.profilForm.controls.age.value;
      profil.video = this.profilForm.controls.youtubeLink.value;
      profil.address = this.profilForm.controls.address.value;
      profil.governorate = this.profilForm.controls.governorate.value;
      profil.telephone = this.profilForm.controls.number.value;
      profil.photo = this.imageList;
      if (this.activateEditMode) {
        profil.id = this.idProfil;
        this.talentService.editProfil(profil).subscribe((result) => {
          this.router.navigate(["/profilDetails", result.id]);
        });
      } else {
        this.talentService.createProfil(profil).subscribe((result) => {
          this.router.navigate(["/profilDetails", result.id]);
        });
      }
    }
  }

  onFileComplete(data: any) {
    this.imageList = this.imageList.concat(data.link).concat('||');
  }
}
