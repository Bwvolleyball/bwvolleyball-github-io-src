import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  template: '<p>Mock App Main Nav</p>'
})
class MockAppMainNavComponent {}

@Component({
  selector: 'app-main-spa',
  template: '<p>Mock App Main Spa</p>'
})
class MockAppMainSpaComponent {}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockAppMainNavComponent,
        MockAppMainSpaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
