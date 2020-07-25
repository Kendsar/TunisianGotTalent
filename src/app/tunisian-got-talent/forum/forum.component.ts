import { Component, OnInit } from '@angular/core';
import { FORUM_MOCK } from './models/mock';
import { ECardType } from 'app/shared/card-list/card-list.component';
import { ForumService } from './services/forum.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(private forumService: ForumService, ) { }

  data1 = FORUM_MOCK;
  EcardType = ECardType;
  data;
  cat: string = "";
  ngOnInit() {
   //
    this.getAll();
    console.log(this.data);
  }

  getAll(){
    this.forumService.getAll().subscribe( res =>{
      console.log(res);
             this.data = res;

    });
  }

  a(s){
    let d;
    this.forumService.getAll().subscribe( res =>{
      console.log(res);
            d = res,
          this.data = this.filterByString(d,s); // Execute when the observable completes
    });
  console.log( this.data);
  }

  
 filterByString(d,s) {
   return d.filter(e => e.category.includes(s))
      .sort((a,b) => a.category.includes(s) && !b.category.includes(s) ? -1 : b.category.includes(s) && !a.category.includes(s) ? 1 :0);
}
}
