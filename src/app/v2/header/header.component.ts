import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public usernames: Username[] = [
    {svgIcon: 'logos:github_logo', username: 'Bwvolleyball', tooltip: 'GitHub', href: 'https://github.com/bwvolleyball'},
    {svgIcon: 'logos:twitter_logo', username: 'Bwvolleyball7', tooltip: 'Twitter', href: 'https://twitter.com/bwvolleyball7'},
    {svgIcon: 'general:blogging', username: 'Bwvolleyball', tooltip: 'Publish0x', href: 'https://www.publish0x.com/@bwvolleyball'},
  ];

  constructor( ) { }

  ngOnInit( ): void { }

}

interface Username {
  svgIcon: string;
  username: string;
  href: string;
  tooltip: string;
}
