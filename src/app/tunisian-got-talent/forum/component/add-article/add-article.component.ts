import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers:[DatePipe]

})
export class AddArticleComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private forumService: ForumService, private datePipe: DatePipe) {}


  message;

  ngOnInit(): void {
  }


  addForm = new FormGroup({
    category: new FormControl("", Validators.required),
    content: new FormControl("",Validators.required),
    publication_date: new FormControl(),
    user_id: new FormControl(),


  });


  add(id){

    let d = new Date();
    let formDate = this.datePipe.transform(d, "dd-mm-yyyy");
    this.addForm.controls.publication_date.setValue(formDate);
    this.addForm.controls.user_id.setValue(7);

    console.log(this.addForm.value);

    this.forumService.addArticle(this.addForm.value).subscribe( res => {
      this.message = res;
       console.log(this.message);
});

  }

}
