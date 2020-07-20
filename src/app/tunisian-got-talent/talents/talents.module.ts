import { TalentProfilDetailsComponent } from './components/talent-profil-details/talent-profil-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { TalentListComponent } from './components/talent-list/talent-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentsComponent } from './talents.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [TalentsComponent, TalentListComponent, TalentProfilDetailsComponent]
})
export class TalentsModule { }
