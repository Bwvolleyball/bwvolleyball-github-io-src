import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionComponent } from './under-construction.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

describe('UnderConstructionComponent', () => {
  let component: UnderConstructionComponent;
  let fixture: ComponentFixture<UnderConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderConstructionComponent ],
      imports: [
        MatCardModule,
        FlexLayoutModule,
        MatGridListModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
