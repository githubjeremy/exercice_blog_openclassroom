import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interface/post.interface';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.html',
  styleUrls: ['./post-list-component.scss']
})
export class PostListComponent implements OnInit {
  @Input() post: Array<Post>;

  constructor() { }

  ngOnInit() {
  }

}
