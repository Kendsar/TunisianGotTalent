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

const routes: Routes =[
  /** TunisianGotTalent Modules */
  { path: 'talents',        component: ProfileComponent },
  // { path: 'talents',        component: TalentsComponent },
  // { path: 'entreprises',     component: TalentsComponent },
  // { path: 'sponsorise',      component: TalentsComponent },
  { path: 'events',         component: EventsComponent },
  { path: 'competitions',   component: CompetitionsComponent },
  { path: 'business',       component: BusinessComponent },
  { path: 'forum',          component: ForumComponent },

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
