import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { SharedModule } from 'app/shared/shared.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { ParticipationComponent } from './components/participation/participation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EventsComponent, EventListComponent, ParticipationComponent]
})
export class EventsModule { }
