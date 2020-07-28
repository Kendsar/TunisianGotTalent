import { Component, OnInit } from '@angular/core';
import { EntrerpiseService } from 'app/tunisian-got-talent/entreprise/services/entrerpise.service';

@Component({
  selector: 'app-sponsoriser-list',
  templateUrl: './sponsoriser-list.component.html',
  styleUrls: ['./sponsoriser-list.component.css']
})
export class SponsoriserListComponent implements OnInit {
  sponsore = [];
  
  constructor(private entrepriseService: EntrerpiseService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.entrepriseService.getAllSponsore().subscribe(r => {
      this.sponsore = r;
      console.log('this.sponsore',this.sponsore)
    })
  }

}
