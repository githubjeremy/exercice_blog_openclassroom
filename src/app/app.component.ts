import { Component } from '@angular/core';
import { Post } from './interface/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public postsArray: Array<Post> = [
    {title: 'Mon premier post',
    // tslint:disable-next-line: max-line-length
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id augue lacus. In hac habitasse platea dictumst. Aliquam venenatis sem elit, at tempor arcu iaculis vitae. Sed quis hendrerit elit.',
    loveIts: true,
    created_at: new Date()
    },
    {title: 'Mon deuxième post',
    // tslint:disable-next-line: max-line-length
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id augue lacus. In hac habitasse platea dictumst. Aliquam venenatis sem elit, at tempor arcu iaculis vitae. Sed quis hendrerit elit.',
    loveIts: false,
    created_at: new Date()},
    {title: 'Encore un post',
    // tslint:disable-next-line: max-line-length
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id augue lacus. In hac habitasse platea dictumst. Aliquam venenatis sem elit, at tempor arcu iaculis vitae. Sed quis hendrerit elit.',
    loveIts: null,
    created_at: new Date()}
  ];
}
