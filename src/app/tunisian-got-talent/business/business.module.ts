import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { SharedModule } from 'app/shared/shared.module';
import { ExamplesModule } from 'app/examples/examples.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExamplesModule
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
