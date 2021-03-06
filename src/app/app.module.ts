import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component';
import { WipCardComponent } from './wip-card/wip-card.component';
import { LinkedinBadgeComponent } from './linkedin-badge/linkedin-badge.component';
import { FooterComponent } from './footer/footer.component';
import { MediumFeedComponent } from './medium-feed/medium-feed.component';
import { ResumeComponent } from './resume/resume.component';
import { DashboardComponent } from './code/dashboard/dashboard.component';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    MainNavComponent,
    TwitterFeedComponent,
    WipCardComponent,
    LinkedinBadgeComponent,
    FooterComponent,
    MediumFeedComponent,
    ResumeComponent,
    DashboardComponent,
    BlogComponent
  ],
  entryComponents: [TwitterFeedComponent, LinkedinBadgeComponent, MediumFeedComponent, WipCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
