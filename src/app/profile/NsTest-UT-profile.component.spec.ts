import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsTestProfileProfileComponent } from './NsTest-profile.component';

describe('NsTestProfileProfileComponent', () => {
  let component: NsTestProfileProfileComponent;
  let fixture: ComponentFixture<NsTestProfileProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsTestProfileProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTestProfileProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
