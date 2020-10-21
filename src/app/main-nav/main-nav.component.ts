import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {NavbarItem} from './navbar-item';
import {ScreenSizeService} from '../screen-size/screen-size.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.screenSizeService.isHandset();

  isNotHandset$: Observable<boolean> = this.screenSizeService.isNotHandset();

  navbarItems: NavbarItem[] = [
    {
      title: 'Home',
      route: '/home',
      icon: 'home'
    },
    {
      title: 'Code',
      route: '/code',
      icon: 'code'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private screenSizeService: ScreenSizeService) {
  }

}
