import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpaComponent } from './main-spa.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: '<p>Mock App Header</p>'
})
class MockAppHeaderComponent {}

@Component({
  selector: 'app-footer-v2',
  template: '<p>Mock App Header</p>'
})
class MockAppFooterV2Component {}

describe('MainSpaComponent', () => {
  let component: MainSpaComponent;
  let fixture: ComponentFixture<MainSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainSpaComponent,
        MockAppHeaderComponent,
        MockAppFooterV2Component,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
