import { Component, OnInit } from '@angular/core';
import { EntrerpiseService } from '../services/entrerpise.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriseListComponent implements OnInit {
  data;
  form: FormGroup;
  entreprises = [];
  ent = []
  constructor(private entrepriseService: EntrerpiseService, private fb: FormBuilder, private router:Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getData();
  }

  getData() {
    this.entrepriseService.getAllentreprise().subscribe(result => {
      this.entreprises = result;
      this.ent = this.entreprises;
      this.data = result;
    })
  }

  initForm() {
    this.form = this.fb.group({
      searchCriteria: [""],
    });
  }

  rechercher() {
    const criter = this.form.controls.searchCriteria.value.toLowerCase();
    if(criter){
      this.ent = this.entreprises.filter(item => item.nom.toLowerCase().includes(criter))
    } else {
      this.ent = this.entreprises;
    }
  }

  delete(id){
    this.entrepriseService.delete(id).subscribe(result => {
      this.getData();
    })
  }

  edit(id){
    this.router.navigate(['/create-entreprise', id]);
  }

}
