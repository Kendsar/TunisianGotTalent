import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CompetitionsComponent } from './competitions.component';
import { SharedModule } from 'app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompetitionDataFactoryService } from './factory/competition-data-factory.service';
import { NewCompetitionComponent } from './new-competition/new-competition.component';
import { ComponentsModule } from 'app/components/components.module';
import { RouterModule } from '@angular/router';
import { CompetitionDetailsComponent } from './competition-details/competition-details.component';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    BarRatingModule
  ],
  providers: [CompetitionDataFactoryService, DatePipe],
  declarations: [CompetitionsComponent, NewCompetitionComponent, CompetitionDetailsComponent]
})
export class CompetitionsModule { }
