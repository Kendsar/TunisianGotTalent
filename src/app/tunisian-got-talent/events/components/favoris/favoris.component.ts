import { Component, OnInit } from '@angular/core';

import { GlobalService } from 'app/tunisian-got-talent/shared/shared.services';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { Favoris } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favoris: Favoris[] = [];
  connectedUser: any;
  EcardType = ECardType;
  constructor(private favoristService: EventService,private globalService: GlobalService) { }

  ngOnInit(): void {
    this.getConnectedUser();
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
      this.getAllFavorisForUser();
    });
  }
  getAllFavorisForUser()
  {
    this.favoristService.getAllFavorisForUser(this.connectedUser.id).subscribe((result) => {
      this.favoris = result;
    });
  }

  refreshData(){
    this.getAllFavorisForUser();
  }

}
