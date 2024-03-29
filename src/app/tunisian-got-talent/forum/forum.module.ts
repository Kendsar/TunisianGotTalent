import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumComponent } from './forum.component';
import { SharedModule } from 'app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForumShowCommentComponent } from './component/forum-show-comment/forum-show-comment.component';
import { AddCommentComponent } from './component/add-comment/add-comment.component';
import { AddArticleComponent } from './component/add-article/add-article.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
        ReactiveFormsModule
  ],
  declarations: [ForumComponent, AddCommentComponent, AddArticleComponent, ForumShowCommentComponent],
  entryComponents: [AddCommentComponent, AddArticleComponent, ForumShowCommentComponent]
})
export class ForumModule { }
