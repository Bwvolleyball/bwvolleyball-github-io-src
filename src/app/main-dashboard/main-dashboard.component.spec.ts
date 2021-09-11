import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MainDashboardComponent } from './main-dashboard.component';
import { of } from 'rxjs';
import {Injector, NgModule} from '@angular/core';
import {TwitterFeedComponent} from '../twitter-feed/twitter-feed.component';
import {LinkedinBadgeComponent} from '../linkedin-badge/linkedin-badge.component';
import {MediumFeedComponent} from '../medium-feed/medium-feed.component';
import {ResumeComponent} from '../resume/resume.component';

// dynamic nature of how these components are 'injected' requires this test module
// to assist bootstrapping this test.
@NgModule({
  declarations: [
    TwitterFeedComponent,
    LinkedinBadgeComponent,
    MediumFeedComponent,
    ResumeComponent,
  ],
  entryComponents: [
    TwitterFeedComponent,
    LinkedinBadgeComponent,
    MediumFeedComponent,
    ResumeComponent,
  ]
})
class TestDynamicMainDashboardModule {}

describe('MainDashboardComponent', () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  let stubBreakpointObserver;

  beforeEach(fakeAsync(() => {

    stubBreakpointObserver = {
      // mock as desktop view.
      observe: jest.fn((breakpoint) => of({matches: false}))
    };

    TestBed.configureTestingModule({
      declarations: [
        MainDashboardComponent,
      ],
      providers: [
        {provide: BreakpointObserver, useValue: stubBreakpointObserver},
        {provide: Injector, useValue: TestBed}
      ],
      imports: [
        TestDynamicMainDashboardModule,
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
