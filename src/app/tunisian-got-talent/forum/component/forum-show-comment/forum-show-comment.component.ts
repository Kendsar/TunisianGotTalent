import { Component, OnInit, Input } from '@angular/core';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum-show-comment',
  templateUrl: './forum-show-comment.component.html',
  styleUrls: ['./forum-show-comment.component.css']
})
export class ForumShowCommentComponent implements OnInit {
  @Input() message;


  constructor(
    private modalService: NgbModal,
    private forumService: ForumService
  ) { }
  EcardType = ECardType;


  ngOnInit(): void {
  }
}
