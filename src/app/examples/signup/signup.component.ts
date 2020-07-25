import { LoginDialogComponent } from "./../login-dialog/login-dialog.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { GlobalService } from "./../../tunisian-got-talent/shared/shared.services";
import { Router } from "@angular/router";
import { UserDetails } from "./../../tunisian-got-talent/shared/shared.models";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  test: Date = new Date();
  focus;
  focus1;
  alert = {
    id: 1,
    type: "danger",
    message: "",
    icon: "nc-bell-55",
  };
  showErreur = false;
  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  validate() {
    if (this.form.valid) {
      let userDetails: UserDetails = new UserDetails();
      userDetails.username = this.form.get("username").value;
      userDetails.password = this.form.get("password").value;
      console.log("userdat:", userDetails);
      this.globalService.authentificate(userDetails).subscribe((result) => {
        if (result instanceof Object) {
          this.showErreur = false;
          this.globalService.setConnectedUser(result);
          this.openDialog();
        } else {
          this.alert.message = result;
          this.showErreur = true;
          this.globalService.setConnectedUser(null);
        }
      });
    }
  }

  openDialog() {
    const modalRef = this.modalService.open(LoginDialogComponent);
  }
}
