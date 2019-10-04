import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.sass']
})
export class MainDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'LinkedIn', cols: 1, rows: 1 },
          { title: 'Resume', cols: 1, rows: 1 },
          { title: 'Twitter', cols: 1, rows: 1 },
          { title: 'Blogs', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'LinkedIn', cols: 2, rows: 1 },
        { title: 'Resume', cols: 1, rows: 1 },
        { title: 'Twitter', cols: 1, rows: 2 },
        { title: 'Blogs', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
