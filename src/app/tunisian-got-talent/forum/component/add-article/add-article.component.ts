import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ForumService } from "../../services/forum.service";
import { DatePipe } from "@angular/common";
import { GlobalService } from "app/tunisian-got-talent/shared/shared.services";
@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"],
  providers: [DatePipe],
})
export class AddArticleComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private forumService: ForumService,
    private datePipe: DatePipe,
    private globalService: GlobalService
  ) {}

  connectedUser;
  message;

  ngOnInit(): void {
    this.getConnectedUser();
  }

  getConnectedUser(){
    this.globalService.getConnectedUser().subscribe(result => {
      this.connectedUser = result;
    })
  }

  addForm = new FormGroup({
    category: new FormControl("", Validators.required),
    content: new FormControl("", Validators.required),
    publication_date: new FormControl(),
    user_id: new FormControl(),
  });

  add(id) {
    let d = new Date();
    let formDate = this.datePipe.transform(d, "dd-mm-yyyy");
    this.addForm.controls.publication_date.setValue(formDate);
    this.addForm.controls.user_id.setValue(this.connectedUser.id);
    this.forumService.addArticle(this.addForm.value).subscribe((res) => {
      this.message = res;
      this.activeModal.close();
    });
  }
}
