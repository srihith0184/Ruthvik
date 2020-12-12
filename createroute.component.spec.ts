import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterouteComponent } from './createroute.component';

describe('CreaterouteComponent', () => {
  let component: CreaterouteComponent;
  let fixture: ComponentFixture<CreaterouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
