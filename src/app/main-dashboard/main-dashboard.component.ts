import {Component, Injector} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {TwitterFeedComponent} from '../twitter-feed/twitter-feed.component';
import {LinkedinBadgeComponent} from '../linkedin-badge/linkedin-badge.component';
import {MediumFeedComponent} from '../medium-feed/medium-feed.component';
import {ResumeComponent} from '../resume/resume.component';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent {

  twitterFeedComponent = TwitterFeedComponent;
  linkedinBadgeComponent = LinkedinBadgeComponent;
  mediumFeedComponent = MediumFeedComponent;
  resumeComponent = ResumeComponent;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Resume Highlights', cols: 2, rows: 1, content: this.resumeComponent},
          {title: 'Blogs', cols: 2, rows: 1, content: this.mediumFeedComponent},
          {title: 'Twitter', cols: 2, rows: 1, content: this.twitterFeedComponent},
          {title: 'LinkedIn', cols: 2, rows: 1, content: this.linkedinBadgeComponent}
        ];
      }

      return [
        {title: 'Resume Highlights', cols: 2, rows: 1, content: this.resumeComponent},
        {title: 'Blogs', cols: 1, rows: 1, content: this.mediumFeedComponent},
        {title: 'Twitter', cols: 1, rows: 2, content: this.twitterFeedComponent},
        {title: 'LinkedIn', cols: 1, rows: 1, content: this.linkedinBadgeComponent}
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public injector: Injector
  ) {
  }
}
