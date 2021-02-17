import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {Subscription} from 'rxjs';
import {BlogPost} from './blog-tree.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit, OnDestroy {

  posts: BlogPost[];

  private subscription: Subscription = new Subscription();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.blogService.posts.subscribe(posts => this.posts = posts)
    );

    this.blogService.posts.subscribe(v => console.log(v)).unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
