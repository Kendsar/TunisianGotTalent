import { Component, OnInit } from '@angular/core';
import { EntrerpiseService } from '../services/entrerpise.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Entreprise } from '../entreprise.models';


@Component({
  selector: 'app-entreprise-add',
  templateUrl: './entreprise-add.component.html',
  styleUrls: ['./entreprise-add.component.css']
})
export class EntrepriseAddComponent implements OnInit {

  form: FormGroup;

  constructor(private entrepriseService: EntrerpiseService, private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
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

  addEntreprise(){
    let ent = new Entreprise();
    ent.name = this.form.controls.name.value;
    ent.place = this.form.controls.place.value;
    ent.email = this.form.controls.email.value;
    ent.site = this.form.controls.site.value;
    ent.nbEmp = this.form.controls.nbEmp.value;
    ent.date = this.form.controls.date.value;
    ent.id_user = 1;
    console.log('xxx',ent)
    this.entrepriseService.addEntreprise(ent).subscribe(result => {
      console.log('x', result)
    });
  }

}
