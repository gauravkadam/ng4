import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazycComponent } from './lazyc.component';

describe('LazycComponent', () => {
  let component: LazycComponent;
  let fixture: ComponentFixture<LazycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
