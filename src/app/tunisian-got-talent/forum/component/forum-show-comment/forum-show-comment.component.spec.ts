import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumShowCommentComponent } from './forum-show-comment.component';

describe('ForumShowCommentComponent', () => {
  let component: ForumShowCommentComponent;
  let fixture: ComponentFixture<ForumShowCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumShowCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumShowCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
