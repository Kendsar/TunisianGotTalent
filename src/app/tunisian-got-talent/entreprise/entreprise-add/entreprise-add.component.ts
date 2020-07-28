import { Component, OnInit } from '@angular/core';
import { EntrerpiseService } from '../services/entrerpise.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Entreprise } from '../entreprise.models';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-entreprise-add',
  templateUrl: './entreprise-add.component.html',
  styleUrls: ['./entreprise-add.component.css']
})
export class EntrepriseAddComponent implements OnInit {
  entreprise: any;
  form: FormGroup;
  idEvent: number;
  activateEditMode: boolean = false;
  constructor(private entrepriseService: EntrerpiseService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getIdFromPath();
  }

  getIdFromPath() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.idEvent = params["id"];
        this.activateEditMode = true;
        this.getEventByID(this.idEvent);
      }
    });
  }

  getEventByID(id){
    this.entrepriseService.getEntrepriseByID(id).subscribe(result => {
      this.entreprise = result;
      this.patchFields(result);
    })
  }

  patchFields(result){
    this.form.controls.name.setValue(result.nom);
    this.form.controls.place.setValue(result.lieux);
    this.form.controls.email.setValue(result.email);
    this.form.controls.site.setValue(result.site_officiel);
    this.form.controls.nbEmp.setValue(result.nbr_employe);
    //this.form.controls.name.setValue(result.nom);
  }

  initForm() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      place: ["", Validators.required],
      email: ["", Validators.required],
      site: ["", Validators.required],
      nbEmp: ["", Validators.required],
      date: ["", Validators.required]
    });
  }

  addEntreprise() {
    let ent = new Entreprise();
    ent.name = this.form.controls.name.value;
    ent.place = this.form.controls.place.value;
    ent.email = this.form.controls.email.value;
    ent.site = this.form.controls.site.value;
    ent.nbEmp = this.form.controls.nbEmp.value;
    ent.date = this.form.controls.date.value;
    ent.id_user = 1;

    if (this.activateEditMode){
      ent.id = this.idEvent;
      this.entrepriseService.editEntreprise(ent).subscribe(r => {
        this.router.navigate(['/entreprise-list']);
      });
    } else {
      this.entrepriseService.addEntreprise(ent).subscribe(r => {
        this.router.navigate(['/entreprise-list']);
      });
    }
  }

}
