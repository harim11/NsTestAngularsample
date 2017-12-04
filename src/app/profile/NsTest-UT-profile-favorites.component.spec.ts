import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsTestProfileFavoritesComponent } from './NsTest-profile-favorites.component';

describe('NsTestProfileFavoritesComponent', () => {
  let component: NsTestProfileFavoritesComponent;
  let fixture: ComponentFixture<NsTestProfileFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsTestProfileFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTestProfileFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
