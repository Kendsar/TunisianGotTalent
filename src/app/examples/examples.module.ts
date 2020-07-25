import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        LoginDialogComponent
    ],
    exports: [
        LandingComponent,
        SignupComponent,
        ProfileComponent
    ],
    entryComponents: [LoginDialogComponent]
})
export class ExamplesModule { }
