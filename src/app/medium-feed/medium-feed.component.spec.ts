import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MediumFeedComponent } from './medium-feed.component';

describe('MediumFeedComponent', () => {
  let component: MediumFeedComponent;
  let fixture: ComponentFixture<MediumFeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
