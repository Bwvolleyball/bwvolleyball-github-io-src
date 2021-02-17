import { Injectable } from '@angular/core';
// @ts-ignore
import BlogData from '../../assets/blog-index.json';
import {BlogPost} from './blog-tree.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // private postsList: BlogJson = BlogData as unknown as BlogJson;
  private posts$: BehaviorSubject<BlogPost[]> = new BehaviorSubject<BlogPost[]>([]);

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<BlogPost[]>('assets/blog-index.json').subscribe(value => this.posts$.next(value));
  }

  public get posts(): Observable<BlogPost[]> {
    return this.posts$;
  }
}
