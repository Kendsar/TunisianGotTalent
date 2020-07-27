import { NewProfilComponent } from './tunisian-got-talent/talents/components/new-profil/new-profil.component';
import { TalentProfilDetailsComponent } from './tunisian-got-talent/talents/components/talent-profil-details/talent-profil-details.component';
import { EventListComponent } from './tunisian-got-talent/events/components/event-list/event-list.component';
import { TalentListComponent } from './tunisian-got-talent/talents/components/talent-list/talent-list.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { TalentsComponent } from './tunisian-got-talent/talents/talents.component';
import { EventsComponent } from './tunisian-got-talent/events/events.component';
import { CompetitionsComponent } from './tunisian-got-talent/competitions/competitions.component';
import { BusinessComponent } from './tunisian-got-talent/business/business.component';
import { ForumComponent } from './tunisian-got-talent/forum/forum.component';
import { NewCompetitionComponent } from './tunisian-got-talent/competitions/new-competition/new-competition.component';
import { ParticipationComponent } from './tunisian-got-talent/events/components/participation/participation.component';
import { FavorisComponent } from './tunisian-got-talent/events/components/favoris/favoris.component';
import { CompetitionDetailsComponent } from './tunisian-got-talent/competitions/competition-details/competition-details.component';

const routes: Routes =[
  /** TunisianGotTalent Modules */
  // { path: 'entreprises',     component: TalentsComponent },
  // { path: 'sponsorise',      component: TalentsComponent },
  { path: 'events',         component: EventListComponent },
  { path: 'profil',        component: ProfileComponent },
  { path: 'createProfil',        component: NewProfilComponent },
  { path: 'createProfil/:id',        component: NewProfilComponent },
  { path: 'profilDetails/:id',        component: TalentProfilDetailsComponent },
  { path: 'talents',        component: TalentListComponent },
  { path: 'events',         component: EventListComponent },
  { path: 'competitions',   component: CompetitionsComponent },
  { path: 'competitions/new',   component: NewCompetitionComponent },
  { path: 'competition/details',   component: CompetitionDetailsComponent },
  { path: 'business',       component: BusinessComponent },
  { path: 'forum',          component: ForumComponent },
  { path: 'participer/:id', component: ParticipationComponent },
  { path: 'favoris/:id',    component: FavorisComponent },


  /** Template */
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
