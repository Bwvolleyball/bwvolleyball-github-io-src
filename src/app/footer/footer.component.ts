import { Component, OnInit } from '@angular/core';
import {ScreenSizeService} from '../screen-size/screen-size.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  isNotHandset: Observable<boolean> = this.screenSizeService.isNotHandset();
  isHandset: Observable<boolean> = this.screenSizeService.isHandset();

  constructor(private screenSizeService: ScreenSizeService) { }

  ngOnInit() {
  }

}
