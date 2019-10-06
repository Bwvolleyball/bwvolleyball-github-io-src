import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  private isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private isNotHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

  /**
   * Replayed observable of the calculation of if the current device is a handset.
   */
  public isHandset(): Observable<boolean> {
    return this.isHandset$;
  }

  /**
   * Replayed observable of the calculation of if the current device is not a handset.
   */
  public isNotHandset(): Observable<boolean> {
    return this.isNotHandset$;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
