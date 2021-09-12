import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterV2Component } from './footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

describe('FooterV2Component', () => {
  let component: FooterV2Component;
  let fixture: ComponentFixture<FooterV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterV2Component ],
      imports: [
        MatCardModule,
        MatListModule,
        MatGridListModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
