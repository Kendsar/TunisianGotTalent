import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-competition',
  templateUrl: './new-competition.component.html',
  styleUrls: ['./new-competition.component.scss']
})
export class NewCompetitionComponent implements OnInit {

  newCompFormG: FormGroup;


  constructor(private location: Location) { }

  ngOnInit() {
    this.newCompFormG = new FormGroup({
      nom: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date_deb: new FormControl('', Validators.required),
      date_fin: new FormControl('', Validators.required),
      nb_max_participant: new FormControl('', Validators.required),
    })
  }


  OnSubmit() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block"
    if (this.newCompFormG.valid) {
      /** WebService POST*/
      /** Success popup */
      /** Redirect */
    }
  }

  closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none"
  }
}
