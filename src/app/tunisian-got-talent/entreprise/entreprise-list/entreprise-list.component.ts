import { Component, OnInit } from '@angular/core';
import { EntrerpiseService } from '../services/entrerpise.service';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriseListComponent implements OnInit {

  entreprises = [];

  constructor(private entrepriseService: EntrerpiseService) { }

  ngOnInit(): void {

    this.entrepriseService.getAllEntreprises().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
