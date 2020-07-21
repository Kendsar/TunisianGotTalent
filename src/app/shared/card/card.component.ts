import { Comment } from './../../tunisian-got-talent/talents/models/talent.models';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TalentService } from "./../../tunisian-got-talent/talents/services/talent.services";
import { GlobalService } from "./../../tunisian-got-talent/shared/shared.services";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ECardType } from "./../card-list/card-list.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParticipationComponent } from 'app/tunisian-got-talent/events/components/participation/participation.component';

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

  constructor(
    private globalService: GlobalService,
    private talentService: TalentService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getConnectedUser();
    if (this.cardType == ECardType.COMMENT){
      this.initCommentForm();
    }
  }

  getConnectedUser() {
    this.globalService.getConnectedUser().subscribe((result) => {
      this.connectedUser = result;
      if(this.connectedUser){
        if (this.cardType == ECardType.COMMENT){
          this.isLiked();
        }
      }
    });
  }

  /* Event Card Logic */

  openDialog() {
    const modalRef = this.modalService.open(ParticipationComponent);
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
    this.talentService.like(this.connectedUser.id, idComment).subscribe(result=>{
      this.liked = !this.liked;
      this.refreshData.emit();
    })
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
}
