import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from './blog.service';
import {Subscription} from 'rxjs';
import {DecoratedBlogPost} from './blog-tree.model';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.subscription.add(
      this.blogService.posts.subscribe(posts => {
        this.organizedPosts = new OrganizedPosts(posts);
        this.route.queryParamMap.subscribe(params => {
          if (params.has('id')) {
            const path = atob(decodeURI(params.get('id')));
            const post = this.organizedPosts.expensiveFind(path);
            if (!!post) {
              this.selectedPost = post;
            }
          }
        });
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public get folders(): string[] {
    return Object.keys(this.organizedPosts.items);
  }

  public selectPost(post: DecoratedBlogPost) {
    this.setPostAsQueryParam(post);
  }

  private setPostAsQueryParam(post: DecoratedBlogPost) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        id: encodeURI(btoa(post.path))
      },
      // preserve the existing query params in the route
      queryParamsHandling: 'merge',
      // do not trigger navigation
      // skipLocationChange: true
    }).then(() => this.selectedPost = post);
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

  // should only be used on page load if a link to a blog was copied.
  public expensiveFind(path: string): DecoratedBlogPost {
    const values = Object.values(this.items);
    if (values.length <= 0) { return null; }
    const maybeBlog = values.reduce((a, b) => [...a, ...b])
      .filter(value => value.path === path);
    return maybeBlog.length > 0 ? maybeBlog[0] : null;
  }
}
