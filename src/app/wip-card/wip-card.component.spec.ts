import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WipCardComponent } from './wip-card.component';

describe('WipCardComponent', () => {
  let component: WipCardComponent;
  let fixture: ComponentFixture<WipCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
