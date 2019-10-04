import {Component, Injector} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {TwitterFeedComponent} from '../twitter-feed/twitter-feed.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent {

  injector: Injector;
  twitterFeedComponent = TwitterFeedComponent;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'LinkedIn', cols: 1, rows: 1, content: 'Card Content Here'},
          {title: 'Resume', cols: 1, rows: 1, content: 'Card Content Here'},
          {title: 'Twitter', cols: 1, rows: 1, content: this.twitterFeedComponent},
          {title: 'Blogs', cols: 1, rows: 1, content: 'Card Content Here'}
        ];
      }

      return [
        {title: 'LinkedIn', cols: 2, rows: 1, content: 'Card Content Here'},
        {title: 'Resume', cols: 1, rows: 1, content: 'Card Content Here'},
        {title: 'Twitter', cols: 1, rows: 2, content: this.twitterFeedComponent},
        {title: 'Blogs', cols: 1, rows: 1, content: 'Card Content Here'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
