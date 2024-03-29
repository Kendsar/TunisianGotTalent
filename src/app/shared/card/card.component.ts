import { Observable } from "rxjs";
import { EventService } from "./../../tunisian-got-talent/events/services/event.service";
import { Comment } from "./../../tunisian-got-talent/talents/models/talent.models";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { TalentService } from "./../../tunisian-got-talent/talents/services/talent.services";
import { GlobalService } from "./../../tunisian-got-talent/shared/shared.services";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ECardType } from "./../card-list/card-list.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ParticipationComponent } from "app/tunisian-got-talent/events/components/participation/participation.component";
import {
  Participate,
  Rate,
} from "app/tunisian-got-talent/events/models/event.model";
import { ForumService } from "app/tunisian-got-talent/forum/services/forum.service";
import { AddCommentComponent } from "app/tunisian-got-talent/forum/component/add-comment/add-comment.component";
import { AddArticleComponent } from "app/tunisian-got-talent/forum/component/add-article/add-article.component";
import { ForumShowCommentComponent } from "app/tunisian-got-talent/forum/component/forum-show-comment/forum-show-comment.component";
import { format } from "util";
import { EntrerpiseService } from "app/tunisian-got-talent/entreprise/services/entrerpise.service";
import { CompetitionService } from "app/tunisian-got-talent/competitions/services/competition.service";
import { CompetitionRate } from "app/tunisian-got-talent/competitions/models/competition.model"

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() cardType: ECardType;
  @Output() refreshData = new EventEmitter();
  @Output() cardClick = new EventEmitter();
  
  EcardType = ECardType;
  connectedUser: any;
  
  /*Comment Var*/
  commentForm: FormGroup;
  editMode: boolean = false;
  liked: boolean;
  participation: boolean;
  
  /** Competition */
  @Output() participateToCompetition = new EventEmitter<any>();
  
  /*Event Var */
  alreadyInFav = true;
  rate: number;
  showRating = false;
  closed: boolean = false;
  alreadyParticipate: boolean = false;

  /* Forum Var*/
  message;
  nbLikes = 0;

  constructor(
    private globalService: GlobalService,
    private talentService: TalentService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private eventService: EventService,
    private forumService: ForumService,
    private entrepriseService: EntrerpiseService,
    private competitionService: CompetitionService,
  ) {}

  ngOnInit() {
    this.getConnectedUser();
    if (this.cardType == ECardType.COMMENT) {
      this.initCommentForm();
    }
    if (this.cardType == ECardType.EVENT) {
      this.initRatingToShow();
      this.checkEvent(this.data);
    }
    if (this.cardType == ECardType.FORUM) {
      this.countNbLikes(this.data.id);
    }
  }

  addForm = new FormGroup({
    article_id: new FormControl("", Validators.required),
  });
  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
      if (this.connectedUser) {
        if (this.cardType == ECardType.COMMENT) {
          this.isLiked();
        }
        if (this.cardType == ECardType.EVENT) {
          this.alreadyInFavorite();
          this.getRateIfExist(this.data.id);
          this.getParticipationIfExist(this.data.id);
        }
      }
    });
  }

  /* Event Card Logic */

  participate() {
    let participate: Participate = new Participate();
    participate.id_user = this.connectedUser.id;
    participate.id_event = this.data.id;
    this.eventService.participate(participate).subscribe((result) => {
      const modalRef = this.modalService.open(ParticipationComponent);
    });
  }

  openDialogComment(x) {
    const modalRef = this.modalService.open(AddCommentComponent);

    modalRef.componentInstance.id = x;

    //let participate: Participate = new Participate();
    // participate.id_user = this.connectedUser.id;
    // participate.id_event = this.data.id;
    //console.log("participate",participate)
  }

  openDialogShowComment(articleID) {
    const modalRef = this.modalService.open(ForumShowCommentComponent);
    this.forumService.getAllComm(articleID).subscribe((res) => {
      modalRef.componentInstance.message = res;
    });
  }

  openDialogArticle() {
    const modalRef = this.modalService.open(AddArticleComponent);
    //let participate: Participate = new Participate();
    // participate.id_user = this.connectedUser.id;
    // participate.id_event = this.data.id;
    //console.log("participate",participate)
  }

  addFavorisAction(eventId) {
    this.eventService
      .addToFavoris(eventId, this.connectedUser.id)
      .subscribe((result) => {
        this.alreadyInFavorite();
      });
  }

  removeFromFavoris(eventId) {
    this.eventService
      .deleteFromFavoris(eventId, this.connectedUser.id)
      .subscribe((result) => {
        this.refreshData.emit();
      });
  }

  emitCardClick(data) {
    console.log("card emitCardClick data", data);
    this.cardClick.emit(data);
  }

  alreadyInFavorite() {
    this.eventService
      .isAlreadyInFavorite(this.data.id, this.connectedUser.id)
      .subscribe((result) => {
        this.alreadyInFav = result;
      });
  }

  rateChange(event, eventId) {
    if (event > 0) {
      let rate = new Rate();
      rate.idevent = eventId;
      rate.iduser = this.connectedUser.id;
      rate.value = event;
      this.eventService.rateEvent(rate).subscribe();
    }
  }

  getRateIfExist(eventId) {
    this.eventService
      .getRateByEventUserID(eventId, this.connectedUser.id)
      .subscribe((result) => {
        this.rate = result;
      });
  }
  getParticipationIfExist(eventId) {
    this.eventService
      .getparticipationByUserID(eventId, this.connectedUser.id)
      .subscribe((result) => {
        this.alreadyParticipate = result;
      });
  }

  initRatingToShow() {
    const d = Date.parse(this.data.date);
    let date = new Date(d);
    if (date < new Date()) this.showRating = true;
  }

  checkEvent(event) {
    if (
      event.nbparticipant == 0 ||
      new Date(Date.parse(event.date)) < new Date()
    ) {
      this.closed = true;
    }
  }

  GetFormattedDate(date) {
    var todayTime = new Date(Date.parse(date));
    var month = format(todayTime.getMonth() + 1);
    var day = format(todayTime.getDate());
    var year = format(todayTime.getFullYear());
    return day + "/" + month + "/" + year;
  }

  /* Comment Card Logic*/

  initCommentForm() {
    this.commentForm = this.fb.group({
      comment: [""],
    });
  }

  isLiked() {
    this.talentService
      .getLikebyCommentUserID(this.connectedUser.id, this.data.id)
      .subscribe((result) => {
        this.liked = result;
      });
  }

  activateEditMode() {
    this.editMode = true;
    this.commentForm.controls.comment.setValue(this.data.text);
  }

  likeAction(idComment) {
    this.liked = !this.liked;
    this.talentService.like(this.connectedUser.id, idComment).subscribe();
    this.liked ? this.data.nblike++ : this.data.nblike--;
  }

  editCommentAction(id) {
    let comment: Comment = new Comment();
    comment.id = id;
    comment.text = this.commentForm.controls.comment.value;

    this.talentService.editComment(comment).subscribe((result) => {
      this.refreshData.emit();
    });
  }

  deleteCommentAction(id) {
    this.talentService.deleteComment(id).subscribe((result) => {
      this.refreshData.emit();
    });
  }

  competitionRateChanged(event, data) {
    if (event > 0) {
      console.log("data", data);
      console.log("event", event);
      
      let rate = new CompetitionRate();
      rate.compId = data.id;
      rate.connectedUserId = this.connectedUser.id;
      rate.rateValue = event;

      this.competitionService.rate(rate).subscribe(e => {
        console.log('e', e)
      });
    }
  }

  compParticip(competition){
    if (this.connectedUser){
      competition.connectedUserId = this.connectedUser.id;
    }
    this.participateToCompetition.emit(competition);
  }

  myFunction(x) {
    // x.classList.toggle("fa-thumbs-down");
    this.addForm.controls.article_id.setValue(x);
    console.log(this.addForm.value);

    this.forumService.add(this.addForm.value).subscribe((res) => {
      this.message = res;
      this.nbLikes ++;
    });
    
  }

  countNbLikes(articleId){
    this.forumService.getLikeByArticle(articleId).subscribe(res => {
      res.forEach(item =>{
        this.nbLikes ++
      })
    });
  }

  sponsoriseAction(){
    this.entrepriseService.sponsorise().subscribe()
  }

  stopEventEmit(event){
    event.stopPropagation();
  }
}
