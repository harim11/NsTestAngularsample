import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsTestSettingsComponent } from './NsTest-settings.component';

describe('NsTestSettingsComponent', () => {
  let component: NsTestSettingsComponent;
  let fixture: ComponentFixture<NsTestSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsTestSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTestSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
