import { Component, OnInit } from "@angular/core";
import { FORUM_MOCK } from "./models/mock";
import { ECardType } from "app/shared/card-list/card-list.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddArticleComponent } from "./component/add-article/add-article.component";
import { ForumService } from "./services/forum.service";
import { GlobalService } from "../shared/shared.services";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"],
})
export class ForumComponent implements OnInit {
  connectedUser;
  data1 = FORUM_MOCK;
  EcardType = ECardType;
  data;
  cat: string = "";
  constructor(
    private forumService: ForumService,
    private modalService: NgbModal,
    private globalService: GlobalService
  ) {}
  
  ngOnInit() {
    this.getConnectedUser();
    this.getAll();
  }
  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
    });
  }

  getAll() {
    this.forumService.getAll().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  a(s) {
    let d;
    this.forumService.getAll().subscribe((res) => {
      console.log(res);
      (d = res), (this.data = this.filterByString(d, s)); // Execute when the observable completes
    });
    console.log(this.data);
  }

  filterByString(d, s) {
    return d
      .filter((e) => e.category.includes(s))
      .sort((a, b) =>
        a.category.includes(s) && !b.category.includes(s)
          ? -1
          : b.category.includes(s) && !a.category.includes(s)
          ? 1
          : 0
      );
  }

  openDialogArticle() {
    const modalRef = this.modalService.open(AddArticleComponent);
  }
}
