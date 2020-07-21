import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SharedModule } from 'app/shared/shared.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { ParticipationComponent } from './components/participation/participation.component';
import { FavorisComponent } from './components/favoris/favoris.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [EventsComponent, EventListComponent, ParticipationComponent, FavorisComponent]
})
export class EventsModule { }
