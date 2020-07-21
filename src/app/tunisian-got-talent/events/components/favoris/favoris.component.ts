import { Component, OnInit } from '@angular/core';
import { Favoris } from '../../models/favoris.model';
import { FavorisService } from '../../services/favoris.service';
import { GlobalService } from 'app/tunisian-got-talent/shared/shared.services';
import { ECardType } from 'app/shared/card-list/card-list.component';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favoris: Favoris[] = [];
  connectedUser: any;
  EcardType = ECardType;
  constructor(private favoristService: FavorisService,private globalService: GlobalService) { }

  ngOnInit(): void {
    this.getConnectedUser();
    this.getAllFavorisForUser();
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
    });
  }
  getAllFavorisForUser()
  {
    this.favoristService.getAllFavorisForUser(this.connectedUser.id).subscribe((result) => {
      this.favoris = result;
      console.log("favoris", this.favoris);
    });
  }

}
