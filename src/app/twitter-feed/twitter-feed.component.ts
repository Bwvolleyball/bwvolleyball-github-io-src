import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.sass']
})
export class TwitterFeedComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit(): void {
    (window as any).twttr.widgets.load();
  }
}