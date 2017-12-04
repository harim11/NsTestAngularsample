import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NsTestCrudBooksComponent } from './ns-test-crud-books.component';

describe('NsTestCrudBooksComponent', () => {
  let component: NsTestCrudBooksComponent;
  let fixture: ComponentFixture<NsTestCrudBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ NsTestCrudBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsTestCrudBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
