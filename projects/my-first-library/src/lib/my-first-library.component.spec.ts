import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstLibraryComponent } from './my-first-library.component';

describe('MyFirstLibraryComponent', () => {
  let component: MyFirstLibraryComponent;
  let fixture: ComponentFixture<MyFirstLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
