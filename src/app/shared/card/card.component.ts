import { Observable } from 'rxjs';
import { EventService } from './../../tunisian-got-talent/events/services/event.service';
import { Comment } from './../../tunisian-got-talent/talents/models/talent.models';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TalentService } from "./../../tunisian-got-talent/talents/services/talent.services";
import { GlobalService } from "./../../tunisian-got-talent/shared/shared.services";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ECardType } from "./../card-list/card-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipationComponent } from 'app/tunisian-got-talent/events/components/participation/participation.component';
import { Participate, Rate } from 'app/tunisian-got-talent/events/models/event.model';
import { ForumService } from 'app/tunisian-got-talent/forum/services/forum.service';
import { AddCommentComponent } from 'app/tunisian-got-talent/forum/component/add-comment/add-comment.component';
import { AddArticleComponent } from 'app/tunisian-got-talent/forum/component/add-article/add-article.component';
import { ForumShowCommentComponent } from 'app/tunisian-got-talent/forum/component/forum-show-comment/forum-show-comment.component';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() cardType: ECardType;
  @Output() refreshData = new EventEmitter();

  EcardType = ECardType;
  connectedUser: any;

  /*Comment Var*/
  commentForm: FormGroup;
  editMode: boolean = false;
  liked: boolean;
  participation:boolean;

  /*Event Var */
  alreadyInFav = true;
  rate: number;
  showRating = false;
  message;

  constructor(
    private globalService: GlobalService,
    private talentService: TalentService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private eventService: EventService,
    private forumService: ForumService
  ) {}

  ngOnInit() {
    this.getConnectedUser();
    if (this.cardType == ECardType.COMMENT){
      this.initCommentForm();
    }
    if (this.cardType == ECardType.EVENT){
      this.initRatingToShow();
    }
  }

  addForm = new FormGroup({
    article_id: new FormControl("", Validators.required)
  });
  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
      if(this.connectedUser){
        if (this.cardType == ECardType.COMMENT){
          this.isLiked();
        }
        if (this.cardType == ECardType.EVENT){
          this.alreadyInFavorite();
          this.getRateIfExist(this.data.id);
        }
      }
    });
  }

  /* Event Card Logic */

  openDialog() {
    const modalRef = this.modalService.open(ParticipationComponent);
    let participate: Participate = new Participate();
    participate.id_user = this.connectedUser.id;
    participate.id_event = this.data.id;
    console.log("participate",participate)  
  }

  openDialogComment(x) {
    const modalRef = this.modalService.open(AddCommentComponent);

    modalRef.componentInstance.id = x;

    //let participate: Participate = new Participate();
   // participate.id_user = this.connectedUser.id;
   // participate.id_event = this.data.id;
    //console.log("participate",participate)  
  }

  openDialogShowComment(value){
    const modalRef = this.modalService.open(ForumShowCommentComponent);
    modalRef.componentInstance.value = value;
    this.forumService.getAllComm().subscribe( res => {
      this.message = res;

});
console.log(this.message);
  }

  openDialogArticle() {
    const modalRef = this.modalService.open(AddArticleComponent);
    //let participate: Participate = new Participate();
   // participate.id_user = this.connectedUser.id;
   // participate.id_event = this.data.id;
    //console.log("participate",participate)  
  }

  addFavorisAction(eventId){
    this.eventService.addToFavoris(eventId, this.connectedUser.id).subscribe(result => {
      this.alreadyInFavorite();
    });
    
  }

  removeFromFavoris(eventId){
    this.eventService.deleteFromFavoris(eventId, this.connectedUser.id).subscribe(result => {
      this.refreshData.emit();
    });
  }

  alreadyInFavorite(){
    this.eventService.isAlreadyInFavorite(this.data.id, this.connectedUser.id).subscribe(result => {
      this.alreadyInFav = result;
    })
  }

  rateChange(event, eventId){
    if (event>0){
      let rate = new Rate()
      rate.idevent = eventId;
      rate.iduser = this.connectedUser.id;
      rate.value = event;
      this.eventService.rateEvent(rate).subscribe();
    }
  }

  getRateIfExist(eventId){
   this.eventService.getRateByEventUserID(eventId, this.connectedUser.id).subscribe(result => { 
     this.rate = result});
  }

  initRatingToShow(){
    const d = Date.parse(this.data.date);
    let date = new Date(d);
    if (date < new Date())
    this.showRating = true;
  }

  /* Comment Card Logic*/

  initCommentForm(){
    this.commentForm = this.fb.group({
      comment: [""],
    });
  }

  isLiked(){
    this.talentService.getLikebyCommentUserID(this.connectedUser.id, this.data.id).subscribe(result => {
      this.liked = result;
    })
  }

  activateEditMode(){
    this.editMode = true;
    this.commentForm.controls.comment.setValue(this.data.text);
  }

  likeAction(idComment){
    this.liked = !this.liked;
    this.talentService.like(this.connectedUser.id, idComment).subscribe();
    this.liked ? this.data.nblike ++ : this.data.nblike -- ;
  }

  editCommentAction(id){
    let comment: Comment = new Comment();
    comment.id = id;
    comment.text = this.commentForm.controls.comment.value;
    
    this.talentService.editComment(comment).subscribe(result=>{
      this.refreshData.emit();
    })
  }

  deleteCommentAction(id) {
    this.talentService.deleteComment(id).subscribe(result => {
      this.refreshData.emit();
    });
  }

  myFunction(x) {
    // x.classList.toggle("fa-thumbs-down");
    this.addForm.controls.article_id.setValue(x);
    console.log(this.addForm.value);
    
 this.forumService.add(this.addForm.value).subscribe( res => {
                  this.message = res;
                   console.log(this.message);
    });
    console.log(x);
  }
}
