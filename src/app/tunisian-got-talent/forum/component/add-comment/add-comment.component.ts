import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ForumService } from "../../services/forum.service";
import { GlobalService } from "app/tunisian-got-talent/shared/shared.services";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.css"],
})
export class AddCommentComponent implements OnInit {
  @Input() id;
  message;
  connectedUser;
  addForm = new FormGroup({
    value: new FormControl("", Validators.required),
    article_id: new FormControl(),
    user_id: new FormControl(),
  });
  constructor(
    public activeModal: NgbActiveModal,
    private forumService: ForumService,
    private globalService: GlobalService,
  ) {}

  ngOnInit(): void {
    this.getConnectedUser();
  }
  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
    });
  }

  add(id) {
    this.addForm.controls.article_id.setValue(id);
    this.addForm.controls.user_id.setValue(this.connectedUser.id);
    this.forumService.addComment(this.addForm.value).subscribe((res) => {
      this.message = res;
      this.activeModal.close();
    });
  }
}
