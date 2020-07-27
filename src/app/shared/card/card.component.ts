import { Observable } from 'rxjs';
import { EventService } from './../../tunisian-got-talent/events/services/event.service';
import { Comment } from './../../tunisian-got-talent/talents/models/talent.models';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TalentService } from "./../../tunisian-got-talent/talents/services/talent.services";
import { GlobalService } from "./../../tunisian-got-talent/shared/shared.services";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ECardType } from "./../card-list/card-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipationComponent } from 'app/tunisian-got-talent/events/components/participation/participation.component';
import { Participate, Rate } from 'app/tunisian-got-talent/events/models/event.model';
import { format } from 'util';

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
  participation:boolean;

  /*Event Var */
  alreadyInFav = true;
  rate: number;
  showRating = false;
  closed :boolean = false;
  alreadyParticipate: boolean = false;
  
  constructor(
    private globalService: GlobalService,
    private talentService: TalentService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private eventService: EventService,
  ) {}

  ngOnInit() {
    this.getConnectedUser();
    if (this.cardType == ECardType.COMMENT){
      this.initCommentForm();
    }
    if (this.cardType == ECardType.EVENT){
      this.initRatingToShow();
      this.checkEvent(this.data);
    }
  }

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
    this.eventService.participate(participate).subscribe(result => {
      const modalRef = this.modalService.open(ParticipationComponent);
    })
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

  emitCardClick(data){
    console.log('card emitCardClick data', data)
    this.cardClick.emit(data);
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
  getParticipationIfExist(eventId){
   this.eventService.getparticipationByUserID(eventId, this.connectedUser.id).subscribe(result => { 
     this.alreadyParticipate = result});
  }

  initRatingToShow(){
    const d = Date.parse(this.data.date);
    let date = new Date(d);
    if (date < new Date())
    this.showRating = true;
  }

  checkEvent(event){
    if (event.nbparticipant == 0 || new Date(Date.parse(event.date)) < new Date()){
      this.closed = true;
    }
  }

  GetFormattedDate(date) {
    var todayTime = new Date(Date.parse(date));
    var month = format(todayTime .getMonth() + 1);
    var day = format(todayTime .getDate());
    var year = format(todayTime .getFullYear());
    return day + "/" + month + "/" + year;
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

  competitionRateChanged(event, data){
    if (event>0){
      let rate = new Rate()
      console.log('data', data)
      console.log('event', event)
      rate.iduser = this.connectedUser.id;
      rate.value = event;
      // this.eventService.rateEvent(rate).subscribe();
    }
  }
}
