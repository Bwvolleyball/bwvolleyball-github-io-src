import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinkedinBadgeComponent } from './linkedin-badge.component';

describe('LinkedinBadgeComponent', () => {
  let component: LinkedinBadgeComponent;
  let fixture: ComponentFixture<LinkedinBadgeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
