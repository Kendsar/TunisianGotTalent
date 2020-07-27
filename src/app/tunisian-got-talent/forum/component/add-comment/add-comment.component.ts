import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() id;
  constructor(public activeModal: NgbActiveModal, private forumService:ForumService) {

   }
  
  message;
  ngOnInit(): void {
 
    
  }

  addForm = new FormGroup({
    value: new FormControl("", Validators.required),
    article_id: new FormControl()

  });
  
  add(id){
    
    console.log(id);
    
    this.addForm.controls.article_id.setValue(id);
    console.log(this.addForm.value);

    this.forumService.addComment(this.addForm.value).subscribe( res => {
      this.message = res;
       console.log(this.message);
});
      

  }

}
