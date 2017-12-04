import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsTestProfileArticlesComponent } from './NsTest-profile-articles.component';

describe('NsTestProfileArticlesComponent', () => {
  let component: NsTestProfileArticlesComponent;
  let fixture: ComponentFixture<NsTestProfileArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsTestProfileArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTestProfileArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
