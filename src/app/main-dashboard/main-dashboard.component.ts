import {Component, Injector} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {TwitterFeedComponent} from '../twitter-feed/twitter-feed.component';
import {WipCardComponent} from '../wip-card/wip-card.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent {

  injector: Injector;
  twitterFeedComponent = TwitterFeedComponent;
  wipCardComponent = WipCardComponent;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'LinkedIn', cols: 2, rows: 1, content: this.wipCardComponent},
          {title: 'Resume', cols: 2, rows: 1, content: this.wipCardComponent},
          {title: 'Twitter', cols: 2, rows: 1, content: this.twitterFeedComponent},
          {title: 'Blogs', cols: 2, rows: 1, content: this.wipCardComponent}
        ];
      }

      return [
        {title: 'LinkedIn', cols: 2, rows: 1, content: this.wipCardComponent},
        {title: 'Resume', cols: 1, rows: 1, content: this.wipCardComponent},
        {title: 'Twitter', cols: 1, rows: 2, content: this.twitterFeedComponent},
        {title: 'Blogs', cols: 1, rows: 1, content: this.wipCardComponent}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
