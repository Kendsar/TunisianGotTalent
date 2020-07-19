import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

/** TO-DO LAZY LOADING */
const TUNISIAN_GOT_TALENT_MODULES = [BusinessModule, CompetitionsModule, EventsModule, ForumModule, TalentsModule];
@NgModule({
  declarations: [
    AppComponent
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

    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
