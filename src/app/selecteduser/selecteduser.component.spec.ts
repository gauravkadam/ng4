import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteduserComponent } from './selecteduser.component';

describe('SelecteduserComponent', () => {
  let component: SelecteduserComponent;
  let fixture: ComponentFixture<SelecteduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecteduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecteduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
