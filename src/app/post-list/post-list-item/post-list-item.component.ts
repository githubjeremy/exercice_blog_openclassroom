import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interface/post.interface';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Array<Post>;

  constructor() { }

  ngOnInit() {
  }

  public onclickLove(post: Post) {
    post.loveIts = true;
  }

  public onclickDontLove(post: Post) {
    post.loveIts = false;
  }

}
