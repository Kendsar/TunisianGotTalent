import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { SharedModule } from './shared/shared.module';
import { BusinessModule } from './tunisian-got-talent/business/business.module';
import { CompetitionsModule } from './tunisian-got-talent/competitions/competitions.module';
import { EventsModule } from './tunisian-got-talent/events/events.module';
import { ForumModule } from './tunisian-got-talent/forum/forum.module';
import { TalentsModule } from './tunisian-got-talent/talents/talents.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';


/* import entreprise & sponsoriser components */

import { EntrepriseAddComponent } from './tunisian-got-talent/entreprise/entreprise-add/entreprise-add.component';
import { EntrepriseListComponent } from './tunisian-got-talent/entreprise/entreprise-list/entreprise-list.component';
import { EntrepriseMainComponent } from './tunisian-got-talent/entreprise/entreprise-main/entreprise-main.component';

import { SponsoriserListComponent } from './tunisian-got-talent/sponsoriser/sponsoriser-list/sponsoriser-list.component';

/** TO-DO LAZY LOADING */
const TUNISIAN_GOT_TALENT_MODULES = [BusinessModule, CompetitionsModule, EventsModule, ForumModule, TalentsModule];
@NgModule({
  declarations: [
    AppComponent,
    EntrepriseAddComponent,
    EntrepriseListComponent,
    EntrepriseMainComponent,
    SponsoriserListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,

    SharedModule,
    CoreModule,

    TUNISIAN_GOT_TALENT_MODULES,

    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
