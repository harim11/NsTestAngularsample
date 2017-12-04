import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Comment, User, NsTestUserService } from '../shared';

@Component({
  selector: 'article-comment',
  templateUrl: './NsTest-article-comment.component.html'
})
export class NSTestArticleCommentComponent implements OnInit {
  constructor(
    private userService: NsTestUserService
  ) {}

  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify: boolean;

  ngOnInit() {
    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    );
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }


}
