import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwitterFeedComponent } from './twitter-feed.component';

describe('TwitterFeedComponent', () => {
  let component: TwitterFeedComponent;
  let fixture: ComponentFixture<TwitterFeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
