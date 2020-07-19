import { SharedModule } from './../../shared/shared.module';
import { TalentListComponent } from './components/talent-list/talent-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentsComponent } from './talents.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TalentsComponent, TalentListComponent]
})
export class TalentsModule { }
