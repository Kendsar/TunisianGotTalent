import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { CardListComponent } from './card-list/card-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    BarRatingModule
  ],
  bootstrap: [SharedComponent, CardListComponent, NavbarComponent, FooterComponent],
  declarations: [SharedComponent, CardListComponent, CardComponent, NavbarComponent, FooterComponent],
  exports: [SharedComponent, CardListComponent, CardComponent, NavbarComponent, FooterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
