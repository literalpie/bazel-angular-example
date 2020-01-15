import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLibComponent } from './second-lib.component';

describe('SecondLibComponent', () => {
  let component: SecondLibComponent;
  let fixture: ComponentFixture<SecondLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
