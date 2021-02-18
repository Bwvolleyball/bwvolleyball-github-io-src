import { Injectable } from '@angular/core';
import {BlogPost, DecoratedBlogPost} from './blog-tree.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // private postsList: BlogJson = BlogData as unknown as BlogJson;
  private posts$: BehaviorSubject<DecoratedBlogPost[]> = new BehaviorSubject<DecoratedBlogPost[]>([]);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<BlogPost[]>('assets/blog-index.json')
      .pipe(map(v => this.decorated(v)))
      .subscribe(value => this.posts$.next(value));
  }

  private decorated(posts: BlogPost[]): DecoratedBlogPost[] {
    return posts.map(v => this.decorate(v));
  }

  private decorate(post: BlogPost): DecoratedBlogPost {
    const folder = post.path.match(/^assets\/blog\/(?<folder>[^\/]+)\/[^\/.]+.md/)
      ?.groups
      .folder
      .replace(/_/g, ' ')
      // title case the folders. These become side bars.
      .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    return ({
      ...post,
      folder
    });
  }


  public get posts(): Observable<DecoratedBlogPost[]> {
    return this.posts$;
  }
}
