import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsTestHomeComponent } from './NsTest-home.component';

describe('NsTestHomeComponent', () => {
  let component: NsTestHomeComponent;
  let fixture: ComponentFixture<NsTestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsTestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
