import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {Subscription} from 'rxjs';
import {BlogPost, DecoratedBlogPost} from './blog-tree.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit, OnDestroy {

  public organizedPosts: OrganizedPosts;

  // TODO: Default the selected post to the 'About.md' post.
  public selectedPost: DecoratedBlogPost = null;

  private subscription: Subscription = new Subscription();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.blogService.posts.subscribe(posts => this.organizedPosts = new OrganizedPosts(posts))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public get folders(): string[] {
    return Object.keys(this.organizedPosts.items);
  }

  public selectPost(post: DecoratedBlogPost) {
    this.selectedPost = post;
  }
}

class OrganizedPosts {

  public readonly items: {[key: string]: DecoratedBlogPost[]} = {};

  public constructor(posts: DecoratedBlogPost[]) {
    posts.forEach(post => this.insert(post.folder, post));
  }

  public insert(key: string, post: DecoratedBlogPost) {
    key = !!key ? key : 'Home';
    if (!!this.items[key]) {
      this.items[key].push(post);
    } else {
      this.items[key] = [post];
    }
  }

  public get(key: string): DecoratedBlogPost[] {
    return this.items[key] || [];
  }
}
